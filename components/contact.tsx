"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  BookOpenText,
  Copy,
  Check,
} from "lucide-react"
import { useState } from "react"
import { personal } from "@/lib/data"
import { SectionHeader } from "./section-header"

const channels = [
  {
    label: "Email",
    value: personal.email,
    href: personal.links.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepak-narayan-moger",
    href: personal.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Deepak-Moger",
    href: personal.links.github,
    icon: Github,
  },
  {
    label: "Medium",
    value: "@mogerdeepu112",
    href: personal.links.medium,
    icon: BookOpenText,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="05 · Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-serif italic">remarkable</span>.
            </>
          }
          description="Open to AI/ML internships, freelance collaborations, and interesting conversations. The fastest way to reach me is by email."
        />

        {/* Email CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5"
        >
          <div className="relative col-span-1 overflow-hidden rounded-3xl border border-border/80 bg-card/40 p-8 backdrop-blur lg:col-span-3">
            <div
              aria-hidden
              className="absolute -top-24 -right-12 h-64 w-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.9 0.18 120 / 0.18) 0%, transparent 70%)",
              }}
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Primary
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {personal.email}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Drop me a line about your project, an opportunity, or simply to
              say hi. I read every message.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={personal.links.email}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
              >
                Send an email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-4 py-2.5 text-sm text-foreground/90 backdrop-blur transition-colors hover:border-foreground/40"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-primary" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick channels */}
          <div className="col-span-1 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {channels.slice(1).map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 text-foreground/90">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="truncate text-sm text-foreground/90">
                        {c.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
