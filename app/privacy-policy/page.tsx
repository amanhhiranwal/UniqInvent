
"use client";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";

import {
  policyMeta,
  policySections,
  contactInfo,
  companyDetails,
} from "./data";

import "./privacy-policy.css";

function renderText(text: string) {  if (!text) return null;

  const parts = text.split(
    /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/
  );

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:opacity-80 transition-opacity"
        >
          {part}
        </a>
      );
    }

    if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="text-primary hover:opacity-80 transition-opacity"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

export default function PrivacyPolicy() {

    const [activeSection, setActiveSection] = useState(
    policySections[0]?.id || ""
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <main className="min-h-screen bg-background text-white">
      <Header />

 {/* Hero */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-36 md:pt-40 pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Legal
          </p>

          <h1
            className="font-medium tracking-tight"
            style={{
              fontSize: "clamp(28px, 6vw, 46px)",
              lineHeight: 1.05,
            }}
          >
            {policyMeta.pageTitle}
          </h1>

          <p className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-8 text-white/50">
            {policyMeta.intro[0]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {policyMeta.businessLines.map((line) => (
              <span
                key={line}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] sm:text-xs text-white/50"
              >
                {line}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-1 text-xs sm:text-sm text-white/30">
            <span>
              Effective Date: {policyMeta.effectiveDate}
            </span>

            <span>
              Last Updated: {policyMeta.lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-12 lg:gap-20">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
                  Contents
                </p>

        <nav className="space-y-3">
  {policySections.map((section) => {
    const isActive = activeSection === section.id;

    return (
      <a
        key={section.id}
        href={`#${section.id}`}
        className={`block text-s leading-5 transition-colors ${
          isActive
            ? "text-primary font-medium"
            : "text-white/35 hover:text-white/80"
        }`}
      >
        <span
          className={`mr-2 ${
            isActive ? "text-primary" : "text-white/20"
          }`}
        >
          {String(section.number).padStart(2, "0")}
        </span>

        {section.title}
      </a>
    );
  })}
</nav>
              </div>
            </aside>

            {/* Policy Sections */}
            <div className="max-w-4xl">
              <div className="space-y-16 md:space-y-20">
                {policySections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    {/* Section Heading */}
                    <div className="flex items-start gap-4 mb-6">
                      <span className="pt-1 text-xs font-medium tracking-[0.15em] text-primary/70">
                        {String(section.number).padStart(2, "0")}
                      </span>

                      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    {/* Intro */}
                    {section.intro && (
                      <p className="mb-5 text-sm sm:text-base leading-8 text-white/50">
                        {renderText(section.intro)}
                      </p>
                    )}

                    {/* Paragraphs */}
                    {section.paragraphs?.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-5 text-sm sm:text-base leading-8 text-white/50 last:mb-0"
                      >
                        {renderText(paragraph)}
                      </p>
                    ))}

                    {/* Groups */}
                    {section.groups?.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className="mb-6 last:mb-0"
                      >
                        {group.lead && (
                          <p className="mb-4 text-sm sm:text-base leading-8 text-white/50">
                            {renderText(group.lead)}
                          </p>
                        )}

                        {group.items?.length > 0 &&
                          (group.ordered ? (
                            <ol className="space-y-3 pl-6 list-decimal text-sm sm:text-base leading-8 text-white/50">
                              {group.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  {renderText(item)}
                                </li>
                              ))}
                            </ol>
                          ) : (
                            <ul className="space-y-3 pl-6 list-disc text-sm sm:text-base leading-8 text-white/50">
                              {group.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  {renderText(item)}
                                </li>
                              ))}
                            </ul>
                          ))}
                      </div>
                    ))}

                    {/* Callout */}
                    {section.callout && (
                      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] px-5 sm:px-7 py-5">
                        <p className="text-sm sm:text-base leading-7 text-white/70">
                          {renderText(section.callout)}
                        </p>
                      </div>
                    )}

                    {/* Closing */}
                    {section.closing && (
                      <p className="mt-6 text-sm sm:text-base leading-8 text-white/50">
                        {renderText(section.closing)}
                      </p>
                    )}

                    {/* Note */}
                    {section.note && (
                      <p className="mt-5 text-xs sm:text-sm leading-7 text-white/30">
                        {renderText(section.note)}
                      </p>
                    )}

                    {/* Section 11 Contact */}
                    {section.id === "grievance-and-contact" && (
                      <div className="mt-10 space-y-5">
                        {/* Contact Card */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
                            Contact
                          </p>

                          <h3 className="mb-6 text-lg sm:text-xl font-medium">
                            {contactInfo.company}
                          </h3>

                          <div className="space-y-5 text-sm leading-7 text-white/50">
                            <div>
                              <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/30">
                                {contactInfo.addressLabel}
                              </p>

                              {contactInfo.addressLines.map((line) => (
                                <p key={line}>{line}</p>
                              ))}
                            </div>

                            <div>
                              <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/30">
                                Email
                              </p>

                              <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-primary hover:opacity-80 transition-opacity"
                              >
                                {contactInfo.email}
                              </a>
                            </div>

                            <div>
                              <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/30">
                                Website
                              </p>

                              <a
                                href={contactInfo.website.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:opacity-80 transition-opacity"
                              >
                                {contactInfo.website.label}
                              </a>
                            </div>

                            <div>
                              <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/30">
                                Grievance Officer
                              </p>

                              <p>
                                {contactInfo.grievanceOfficer.name ||
                                  contactInfo.grievanceOfficer.placeholder}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Company Details */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
                            {companyDetails.title}
                          </p>

                          <div className="space-y-4">
                            {companyDetails.rows.map((row) => (
                              <div
                                key={row.label}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                              >
                                <span className="text-xs uppercase tracking-[0.12em] text-white/30">
                                  {row.label}
                                </span>

                                <span className="text-sm text-white/60 sm:text-right">
                                  {row.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {companyDetails.directors?.length > 0 && (
                            <div className="mt-8">
                              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-white/30">
                                Directors
                              </p>

                              <div className="space-y-3">
                                {companyDetails.directors.map((director) => (
                                  <div
                                    key={director.name}
                                    className="flex items-center justify-between gap-4 text-sm"
                                  >
                                    <span className="text-white/60">
                                      {director.name}
                                    </span>

                                    <span className="text-white/30">
                                      {director.role}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </main>
  );
}

