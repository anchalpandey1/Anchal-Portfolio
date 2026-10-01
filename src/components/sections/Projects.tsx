import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy'
import { ProjectListItem } from '@/components/projects/ProjectListItem'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Projects() {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const [mobileOpen, setMobileOpen] = useState(false)

  const selected = projects.find((p) => p.id === selectedId) ?? projects[0]

  const handleSelect = (id: string) => {
    setSelectedId(id)
    setMobileOpen(true)
  }

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Featured case studies"
      description="Select a project to explore the challenge, architecture, and impact — built for quick recruiter scanning."
      className="bg-surface/50 dark:bg-surface/30"
      titleClassName="text-3xl md:text-[2.75rem] md:leading-tight"
      descriptionClassName="text-base md:text-lg max-w-2xl"
      headerClassName="mb-8 md:mb-10"
    >
      {/* Desktop: master-detail */}
      <div className="hidden lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
        <nav
          className="sticky top-24 flex h-fit flex-col gap-1 rounded-xl border border-border bg-card p-2"
          aria-label="Project navigation"
        >
          {projects.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              isActive={selectedId === project.id}
              onSelect={() => setSelectedId(project.id)}
            />
          ))}
        </nav>

        <ProjectCaseStudy project={selected} />
      </div>

      {/* Mobile: accordion-style */}
      <div className="lg:hidden">
        <div
          className="flex flex-col gap-1 rounded-xl border border-border bg-card p-2"
          role="tablist"
          aria-label="Project navigation"
        >
          {projects.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              isActive={selectedId === project.id}
              onSelect={() => handleSelect(project.id)}
            />
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="mt-4 flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-primary"
          aria-expanded={mobileOpen}
        >
          View case study: {selected.name}
          <motion.span
            animate={{ rotate: mobileOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="size-4 text-secondary" />
          </motion.span>
        </motion.button>

        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? 'auto' : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn('overflow-hidden', mobileOpen && 'mt-3')}
        >
          <ProjectCaseStudy project={selected} />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
