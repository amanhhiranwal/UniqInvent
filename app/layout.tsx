// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Uniqinvent - Simplifying Sustainable Transformation',
//   description: 'Integrated solutions across lithium battery recycling, renewable energy, and EV infrastructure for a sustainable tomorrow.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/Fav-Icon.png.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/Fav-Icon.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/Fav-Icon.png',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/Fav-Icon.png.png',
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="bg-background">
//       <body className="font-sans antialiased bg-background text-foreground">
//         {children}
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }


import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// ✅ Load Work Sans (variable font supports custom weights like 250)
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uniqinvent - Simplifying Sustainable Transformation",
  description:
    "Integrated solutions across lithium battery recycling, renewable energy, and EV infrastructure for a sustainable tomorrow.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Fav-Icon.png.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Fav-Icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Fav-Icon.png",
        type: "image/png",
      },
    ],
    apple: "/Fav-Icon.png.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${workSans.className} antialiased bg-background text-foreground`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}