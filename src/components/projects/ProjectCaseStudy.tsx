import { AnimatePresence, motion } from 'framer-motion'
import { Layers, Lightbulb, Settings, Target, TrendingUp, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/portfolio'
import { getProjectIcon } from '@/lib/project-icons'

interface ProjectCaseStudyProps {
  project: Project
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const Icon = getProjectIcon(project.icon)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-xl border border-border bg-card p-5 transition-shadow duration-300 md:p-7 lg:p-8 dark:shadow-card"
      >
        <div className="mb-6 flex items-start gap-4 border-b border-border pb-6">
          <span className="inline-flex rounded-lg border border-accent/20 bg-accent-muted p-2.5">
            {Icon && <Icon className="size-5 text-accent" aria-hidden="true" />}
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
              {project.fullName}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{project.category}</p>
            <p className="mt-2 text-sm text-secondary">{project.tagline}</p>
          </div>
        </div>

        <div className="space-y-5">
          <CaseStudySection icon={Target} label="Challenge">
            <p className="text-sm leading-relaxed text-secondary">{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection icon={Lightbulb} label="Solution">
            <p className="text-sm leading-relaxed text-secondary">{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection icon={Settings} label="Tech Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection icon={TrendingUp} label="Impact">
            <p className="rounded-lg border border-border bg-background p-3.5 text-sm leading-relaxed text-secondary">
              {project.impact}
            </p>
          </CaseStudySection>

          <CaseStudySection icon={Layers} label="Architecture Highlights">
            <ul className="space-y-1.5">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-secondary">
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudySection>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function CaseStudySection({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="size-3.5 text-accent" aria-hidden="true" />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</h4>
      </div>
      <div className="pl-5">{children}</div>
    </div>
  )
}
