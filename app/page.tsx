import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Domains } from "@/components/domains"
import { SystemArchitect } from "@/components/system-architect"
import { Solutions } from "@/components/solutions"

import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Domains />

     <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24" style={{ height: "300vh" }}>
  <div className="sticky top-0 z-0">
    <SystemArchitect />
  </div>
</div>

<div className="relative z-10 -mt-[100vh]">
  <Solutions />
   <section id="contact" >
    <Contact />
  </section>
  <Footer />
</div>

    </main>
  )
}