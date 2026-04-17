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
      <SystemArchitect />
      <Solutions />
      <Contact/>
      <Footer />
    </main>
  )
}
