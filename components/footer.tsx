import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  offerings: [
    { label: "LED Systems", href: "#" },
    { label: "Resource Recovery", href: "#" },
    { label: "Green Energy", href: "#" },
    { label: "EV Platform", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Approach", href: "#" },
    { label: "Ecosystem", href: "#" },
    { label: "Careers", href: "#" },
  ],
  contact: [
    { label: "hello@uniqinvent.com", href: "mailto:hello@uniqinvent.com" },
    { label: "Partnerships", href: "#" },
    { label: "Press", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Logo + Description — col span 1 */}
          <div className="">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/images/vector.png"
                alt="Uniqinvent Logo"
                width={56}
                height={56}
              />
            </Link>
            <p className="text-sm text-white/40 leading-7 ">
              Focused on the mission of advancing sustainable technology and
              clean energy solutions, the organization works towards building
              efficient and future-ready systems across evolving industrial and
              digital landscapes.
            </p>
          </div>

          {/* Links — 3 columns */}
          <div className="grid grid-cols-3 gap-8">
            {/* Offerings */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary mb-6">
                Offerings
              </h4>
              <ul className="space-y-2">
                {footerLinks.offerings.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40  transition-colors hover-gradient"
                      style={{
                        fontSize: "clamp(11px, 1vw, 16px)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary mb-6">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors hover-gradient"
                      style={{
                        fontSize: "clamp(11px, 1vw, 16px)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary mb-6">
                Contact
              </h4>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors hover-gradient"
                      style={{
                        fontSize: "clamp(11px, 1vw, 16px)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2025 UniqInvent. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
