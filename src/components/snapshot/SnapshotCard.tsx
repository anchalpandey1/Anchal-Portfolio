import { motion } from 'framer-motion'
import type { SnapshotStat } from '@/data/portfolio'
import { getSnapshotIcon } from '@/lib/snapshot-icons'
import { cn } from '@/lib/utils'

interface SnapshotCardProps {
  stat: SnapshotStat
  index: number
}

export function SnapshotCard({ stat, index }: SnapshotCardProps) {
  const Icon = getSnapshotIcon(stat.icon)
  const isCompactValue = stat.value.length > 6

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-elevated dark:hover:shadow-glow md:p-6"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-2.5 ring-1 ring-accent/10 transition-all duration-300 group-hover:ring-accent/25">
          {Icon && <Icon className="size-4.5 text-accent" aria-hidden="true" />}
        </div>

        <p
          className={cn(
            'font-bold tracking-tight text-foreground',
            isCompactValue ? 'text-2xl md:text-2xl' : 'text-3xl md:text-4xl',
          )}
        >
          {stat.value}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-foreground md:text-base">
          {stat.label}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-secondary md:text-sm">
          {stat.description}
        </p>
      </div>
    </motion.article>
  )
}
