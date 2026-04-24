// import Link from "next/link"
// import Image from "next/image"

// const footerLinks = {
//   offerings: [
//     { label: "LED Systems", href: "#" },
//     { label: "Resource Recovery", href: "#" },
//     { label: "Green Energy", href: "#" },
//     { label: "EV Platforms", href: "#" },
//   ],
//   company: [
//     { label: "About Us", href: "#" },
//     { label: "Careers", href: "#" },
//     { label: "Ecosystem", href: "#" },
//     { label: "Partners", href: "#" },
//   ],
//   contact: [
//     { label: "hello@uniqinvent.com", href: "mailto:hello@uniqinvent.com" },
//     { label: "LinkedIn", href: "#" },
//     { label: "Twitter", href: "#" },
//   ],
// }

// export function Footer() {
//   return (
//     <footer className="py-16 bg-background border-t border-border">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//           {/* Logo and Description */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="inline-flex items-center gap-2 mb-6">
//   <Image
//     src="./images/vector.png"      
//     alt="Uniqinvent Logo"
//     width={40}
//     height={40}
//   />
// </Link>
//             <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
//               Uniqinvent is the creator of advancing sustainable technologies with best-in-class battery recycling, the
//               most responsive solar solutions by a global team, clean e-mobility infrastructure, and cutting-
//               edge LED systems.
//             </p>
//           </div>

//           {/* Offerings */}
//           <div>
//             <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Offerings</h4>
//             <ul className="space-y-3">
//               {footerLinks.offerings.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Company</h4>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Contact</h4>
//             <ul className="space-y-3">
//               {footerLinks.contact.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-border">
//           <p className="text-xs text-muted-foreground">
//             © {new Date().getFullYear()} Uniqinvent. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }


import Link from "next/link"
import Image from "next/image"

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
}

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
              Focused on the mission of advancing sustainable technology and clean energy solutions, the organization works towards building efficient and future-ready systems across evolving industrial and digital landscapes.
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
                    <Link href={link.href} className="text-sm text-white/40  transition-colors hover-gradient"
                    style={{
    fontSize: "clamp(11px, 1vw, 16px)",
  }}>
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
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors hover-gradient"
                    style={{
    fontSize: "clamp(11px, 1vw, 16px)",
  }}>
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
                    <Link href={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors hover-gradient"
                    style={{
    fontSize: "clamp(11px, 1vw, 16px)",
  }}>
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
              <Link key={social} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}