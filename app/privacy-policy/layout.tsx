import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Uniqinvent",
  description:
    "Privacy Policy for UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED explaining how we collect, use, and protect your information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
