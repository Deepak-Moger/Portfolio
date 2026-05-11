"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/data"
import { SectionHeader } from "./section-header"

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="03 · Selected Work"
          title={
            <>
              Projects that turn{" "}
              <span className="font-serif italic">ideas</span> into impact.
            </>
          }
          description="A small selection of recent work — each one shipped end-to-end, from research and modeling through to deployment."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/40 backdrop-blur transition-colors hover:border-primary/40"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80 backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {project.period}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary/90">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-xl border border-border/60 bg-background/40 p-3 text-xs leading-relaxed text-foreground/80"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-foreground/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-background/40 text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={project.link ?? project.github ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:gap-2"
                    >
                      View
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* See more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Deepak-Moger"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-colors hover:border-foreground/40"
          >
            <Github className="h-4 w-4" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
