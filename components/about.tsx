"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { personal, education } from "@/lib/data"
import { SectionHeader } from "./section-header"

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="01 · About"
          title={
            <>
              A curious mind, <span className="font-serif italic">building</span>{" "}
              with intent.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/80 bg-card">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${personal.name}`}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              {/* Frame label */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {personal.shortName}
              </div>
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-background/40 px-3 py-1 font-mono text-[10px] text-foreground/80 backdrop-blur">
                <MapPin className="h-3 w-3" /> {personal.location}
              </div>
            </div>
          </motion.div>

          {/* Copy + education */}
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-pretty text-lg leading-relaxed text-foreground/90"
            >
              {personal.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10"
            >
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                Education
              </h3>

              <ol className="relative space-y-6 border-l border-border pl-6">
                {education.map((e, i) => (
                  <motion.li
                    key={e.school}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {e.period}
                    </p>
                    <h4 className="mt-1 font-serif text-xl text-foreground">
                      {e.school}
                    </h4>
                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                    {e.detail && (
                      <p className="mt-1 text-sm text-foreground/80">
                        {e.detail}
                      </p>
                    )}
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
