"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`static top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <Link href="/" className="flex items-center">
  <Image
    src="/Vector (1).png"
    alt="Uniqinvent"
    width={150}
    height={40}
    priority
  />
</Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground hover-gradient cursor-pointer transition-colors">
              What we do
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground hover-gradient cursor-pointer transition-colors">
              Who we are
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#contact">
            <Button
  variant="outline"
  className="
    border border-white/30 text-muted-foreground bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm
    transition-all duration-300
    hover:bg-transparent hover:border-white/60 hover:text-white
    hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.08),inset_0_0_20px_2px_rgba(255,255,255,0.04)]
  "
>
  Contact Us
</Button>
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                What we do
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                Who we are
                <ChevronDown className="h-4 w-4" />
              </div>
              <Button
  variant="outline"
  className="
    border border-white/30 text-muted-foreground bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm
    transition-all duration-300
    hover:bg-transparent hover:border-white/60 hover:text-white
    hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.08),inset_0_0_20px_2px_rgba(255,255,255,0.04)]
  "
>
  Contact Us
</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
