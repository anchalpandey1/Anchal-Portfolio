import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  headerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  label?: string
  title: string
  description?: string
}

export function SectionWrapper({
  id,
  children,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
  label,
  title,
  description,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 md:py-28', className)} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className={cn('mb-12 md:mb-16', headerClassName)}
        >
          {label && (
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              {label}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className={cn(
              'text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl',
              titleClassName,
            )}
          >
            {title}
          </h2>
          {description && (
            <p className={cn('mt-4 max-w-2xl text-lg text-secondary', descriptionClassName)}>
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
