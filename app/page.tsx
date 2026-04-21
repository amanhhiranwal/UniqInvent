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

     <div className="relative" style={{ height: "300vh" }}>
  <div className="sticky top-0 z-0">
    <SystemArchitect />
  </div>
</div>

<div className="relative z-10 -mt-[100vh]">
  <Solutions />
   <section id="contact">
    <Contact />
  </section>
  <Footer />
</div>

    </main>
  )
}