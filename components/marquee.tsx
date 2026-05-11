import { marqueeSkills } from "@/lib/data"

export function SkillsMarquee() {
  // Duplicate for seamless loop
  const items = [...marqueeSkills, ...marqueeSkills]

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border/60 bg-background/40 py-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-12 font-serif text-3xl text-foreground/70 sm:text-4xl"
          >
            {skill}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
