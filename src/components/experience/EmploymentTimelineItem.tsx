import { motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { EmploymentExperience } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface EmploymentTimelineItemProps {
  entry: EmploymentExperience
  index: number
  isExpanded: boolean
  isLast: boolean
  onToggle: () => void
}

export function EmploymentTimelineItem({
  entry,
  index,
  isExpanded,
  isLast,
  onToggle,
}: EmploymentTimelineItemProps) {
  const hasExpandableContent =
    Boolean(entry.highlights?.length) ||
    Boolean(entry.keyProducts?.length) ||
    Boolean(entry.techStack?.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-full border-2 bg-card text-xs font-bold tracking-wide transition-all duration-300',
            isExpanded
              ? 'border-accent/40 bg-accent-muted text-accent shadow-sm'
              : 'border-border text-secondary',
          )}
          aria-hidden="true"
        >
          {entry.initials}
        </div>
        {!isLast && (
          <div
            className="mt-2 w-px flex-1 bg-gradient-to-b from-border via-border to-transparent"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Card column */}
      <article
        className={cn(
          'mb-6 overflow-hidden rounded-xl border bg-card transition-all duration-300',
          isExpanded
            ? 'border-accent/25 shadow-glow'
            : 'border-border hover:-translate-y-0.5 hover:border-accent/15 hover:shadow-elevated',
          isLast && 'mb-0',
        )}
      >
        <button
          type="button"
          onClick={hasExpandableContent ? onToggle : undefined}
          aria-expanded={hasExpandableContent ? isExpanded : undefined}
          aria-controls={hasExpandableContent ? `employment-panel-${entry.id}` : undefined}
          className={cn(
            'flex w-full items-start justify-between gap-4 p-4 text-left md:p-5',
            !hasExpandableContent && 'cursor-default',
          )}
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold tracking-tight text-primary md:text-lg">
                {entry.company}
              </h3>
              <Badge
                variant={entry.employmentType === 'Full-time' ? 'accent' : 'outline'}
                className="text-[10px] uppercase tracking-wide"
              >
                {entry.period}
              </Badge>
            </div>

            <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>
            <p className="mt-0.5 text-xs text-secondary">
              {entry.employmentType} · {entry.location}
            </p>

            {!isExpanded && (
              <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-secondary">
                {entry.summary}
              </p>
            )}
          </div>

          {hasExpandableContent && (
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-1 shrink-0 text-secondary"
              aria-hidden="true"
            >
              <ChevronDown className="size-4" />
            </motion.span>
          )}
        </button>

        {hasExpandableContent && (
          <motion.div
            id={`employment-panel-${entry.id}`}
            role="region"
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-border px-4 pb-5 pt-4 md:px-5 md:pb-6">
              <div>
                <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Summary
                </h4>
                <p className="text-sm leading-relaxed text-secondary">{entry.summary}</p>
              </div>

              {entry.keyProducts && entry.keyProducts.length > 0 && (
                <div>
                  <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Key Products
                  </h4>
                  <ul className="space-y-1.5">
                    {entry.keyProducts.map((product) => (
                      <li
                        key={product}
                        className="flex gap-2 text-sm text-secondary"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                          strokeWidth={2.5}
                        />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.highlights && entry.highlights.length > 0 && (
                <div>
                  <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-secondary">
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.techStack && entry.techStack.length > 0 && (
                <div>
                  <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </article>
    </motion.div>
  )
}
