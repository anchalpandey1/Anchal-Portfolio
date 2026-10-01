import { motion } from 'framer-motion'
import type { SkillCategory } from '@/data/portfolio'
import { getSkillIcon } from '@/lib/skill-icons'
import { SkillChip } from './SkillChip'

interface SkillCardProps {
  category: SkillCategory
  index: number
}

export function SkillCard({ category, index }: SkillCardProps) {
  const CategoryIcon = getSkillIcon(category.icon)
  const isAi = category.id === 'ai'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group glass-card rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-elevated dark:hover:shadow-glow"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="inline-flex rounded-lg border border-border bg-border-subtle p-2.5 transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent-muted/50">
          {CategoryIcon && (
            <CategoryIcon
              className="size-5 text-accent"
              aria-hidden="true"
            />
          )}
        </div>
        <h3 className="text-base font-semibold tracking-tight text-primary md:text-lg">
          {category.label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillChip
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            accent={isAi}
          />
        ))}
      </div>
    </motion.article>
  )
}
