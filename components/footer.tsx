import { Github, Linkedin, Mail, BookOpenText, ArrowUp } from "lucide-react"
import { personal } from "@/lib/data"

const social = [
  { href: personal.links.github, label: "GitHub", Icon: Github },
  { href: personal.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: personal.links.medium, label: "Medium", Icon: BookOpenText },
  { href: personal.links.email, label: "Email", Icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-serif text-xl text-foreground">
            {personal.shortName}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed &amp; built with care.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/40 text-foreground/80 backdrop-blur transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/40 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground/80 backdrop-blur transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            Top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
