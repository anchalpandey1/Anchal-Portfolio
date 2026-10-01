import type { Project } from '@/data/portfolio'
import { getProjectIcon } from '@/lib/project-icons'
import { cn } from '@/lib/utils'

interface ProjectListItemProps {
  project: Project
  isActive: boolean
  onSelect: () => void
}

export function ProjectListItem({ project, isActive, onSelect }: ProjectListItemProps) {
  const Icon = getProjectIcon(project.icon)

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive ? 'true' : undefined}
      className={cn(
        'flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all duration-200',
        isActive
          ? 'border-accent/30 bg-accent-muted/50 shadow-glow'
          : 'border-transparent bg-transparent hover:border-border hover:bg-surface dark:hover:bg-card/50',
      )}
    >
      <span
        className={cn(
          'inline-flex shrink-0 rounded-md border p-2 transition-colors',
          isActive
            ? 'border-accent/20 bg-card text-accent'
            : 'border-border bg-border-subtle text-secondary',
        )}
      >
        {Icon && <Icon className="size-4" aria-hidden="true" />}
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            'block truncate text-sm font-semibold',
            isActive ? 'text-primary' : 'text-primary/90',
          )}
        >
          {project.name}
        </span>
        <span className="mt-0.5 block truncate text-xs text-secondary">{project.category}</span>
      </span>
    </button>
  )
}
