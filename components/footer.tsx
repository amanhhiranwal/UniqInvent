import Link from "next/link"

const footerLinks = {
  offerings: [
    { label: "LED Systems", href: "#" },
    { label: "Resource Recovery", href: "#" },
    { label: "Green Energy", href: "#" },
    { label: "EV Platforms", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Ecosystem", href: "#" },
    { label: "Partners", href: "#" },
  ],
  contact: [
    { label: "hello@uniqinvent.com", href: "mailto:hello@uniqinvent.com" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Ui</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Uniqinvent is the creator of advancing sustainable technologies with best-in-class battery recycling, the
              most responsive solar solutions by a global team, clean e-mobility infrastructure, and cutting-
              edge LED systems.
            </p>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Offerings</h4>
            <ul className="space-y-3">
              {footerLinks.offerings.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Uniqinvent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
