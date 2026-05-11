"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { certifications, awards, type Achievement } from "@/lib/data"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

type Tab = "certifications" | "awards"

const TABS: { id: Tab; label: string; data: Achievement[] }[] = [
  { id: "certifications", label: "Certifications", data: certifications },
  { id: "awards", label: "Awards", data: awards },
]

export function Achievements() {
  const [tab, setTab] = useState<Tab>("certifications")
  const active = TABS.find((t) => t.id === tab)!

  return (
    <section
      id="achievements"
      className="relative px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="04 · Recognition"
          title={
            <>
              Certifications &amp;{" "}
              <span className="font-serif italic">moments of pride</span>.
            </>
          }
          description="A growing collection of programs and awards that have shaped how I think and build."
        />

        {/* Tabs */}
        <div className="mt-12 inline-flex rounded-full border border-border/80 bg-card/40 p-1 backdrop-blur">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-colors",
                tab === t.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="ach-tab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-muted"
                />
              )}
              <span className="relative z-10">{t.label}</span>
              <span className="relative z-10 ml-1.5 font-mono text-[10px] text-muted-foreground">
                {String(t.data.length).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active.data.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background/60 text-primary transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {a.org} · {a.date}
                      </p>
                      <h3 className="mt-1 text-balance font-serif text-lg leading-tight text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
