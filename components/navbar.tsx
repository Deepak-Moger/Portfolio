"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navItems, personal } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border border-border/60 px-4 py-2.5 backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "bg-background/70 shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
            : "bg-background/30",
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground">
            {personal.initials}
          </span>
          <span className="hidden text-foreground/90 sm:inline">
            {personal.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Resume CTA */}
        <a
          href={personal.resumeUrl}
          download
          className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 md:inline-block"
        >
          Resume
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-full p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-20 z-40 rounded-2xl border border-border/60 bg-background/90 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-foreground/90 hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={personal.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
