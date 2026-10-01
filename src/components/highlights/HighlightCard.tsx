import { motion } from 'framer-motion'
import type { ProfessionalHighlight } from '@/data/portfolio'
import { getHighlightIcon } from '@/lib/highlight-icons'

interface HighlightCardProps {
  highlight: ProfessionalHighlight
  index: number
}

export function HighlightCard({ highlight, index }: HighlightCardProps) {
  const Icon = getHighlightIcon(highlight.icon)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-elevated dark:hover:shadow-glow md:p-7"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-3 ring-1 ring-accent/10 transition-all duration-300 group-hover:from-accent/20 group-hover:ring-accent/20">
          {Icon && <Icon className="size-5 text-accent" aria-hidden="true" />}
        </div>

        <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {highlight.metric}
        </p>
        <h3 className="mt-1 text-base font-semibold text-primary md:text-lg">
          {highlight.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          {highlight.description}
        </p>
      </div>
    </motion.article>
  )
}
