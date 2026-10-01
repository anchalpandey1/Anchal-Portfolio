import { getSkillIcon } from '@/lib/skill-icons'
import { cn } from '@/lib/utils'

interface SkillChipProps {
  name: string
  icon?: string
  accent?: boolean
}

export function SkillChip({ name, icon, accent = false }: SkillChipProps) {
  const Icon = icon ? getSkillIcon(icon) : undefined

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
        accent
          ? 'border-accent/15 bg-accent-muted/60 text-accent'
          : 'border-border bg-background text-secondary',
      )}
    >
      {Icon && <Icon className="size-3 shrink-0 opacity-70" aria-hidden="true" />}
      {name}
    </span>
  )
}
