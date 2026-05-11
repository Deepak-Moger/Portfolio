"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/lib/data"
import { SectionHeader } from "./section-header"

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="02 · Toolkit"
          title={
            <>
              The stack I <span className="font-serif italic">reach for</span>{" "}
              first.
            </>
          }
          description="A curated set of languages, frameworks and platforms I use to ship AI/ML systems — from prototype to production."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur transition-colors hover:border-primary/40"
              >
                {/* Hover gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.9 0.18 120 / 0.08), transparent 50%)",
                  }}
                />

                <div className="relative flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground">
                    {category.title}
                  </h3>

                  <ul className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-xs text-foreground/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
