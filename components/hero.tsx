"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react"
import { personal, stats } from "@/lib/data"
import { RoleRotator } from "./role-rotator"

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-center px-6 pb-16 pt-32 sm:px-10 sm:pt-40"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Availability chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for AI/ML internships &amp; collaborations
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Portfolio · 2025
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(3rem,11vw,9.5rem)] leading-[0.95] tracking-tight text-balance"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-primary">Deepak</span>
          <span className="font-serif italic text-muted-foreground">
            {" "}
            —{" "}
          </span>
          <br className="hidden sm:block" />I design{" "}
          <span className="font-serif italic">intelligent</span> systems.
        </motion.h1>

        {/* Subhead + rotator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personal.tagline}
          </p>
          <RoleRotator roles={personal.roles} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:shadow-[0_0_30px_-5px_oklch(0.9_0.18_120/0.6)]"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-5 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:border-foreground/40 hover:bg-card"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
          <a
            href="#contact"
            className="link-underline ml-1 text-sm text-muted-foreground hover:text-foreground"
          >
            or get in touch
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-1 bg-background/70 p-5 backdrop-blur"
            >
              <span className="font-serif text-3xl text-foreground sm:text-4xl">
                {s.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest"
        >
          Scroll
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
