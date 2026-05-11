"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="hidden h-px w-10 bg-border md:inline-block" />
      <span aria-hidden>currently</span>
      <span className="relative inline-flex h-5 min-w-[10rem] items-center overflow-hidden text-foreground">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  )
}
