import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SkillCard } from '@/components/skills/SkillCard'
import { skillCategories } from '@/data/portfolio'

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technical expertise"
      description="Production-ready skills across full-stack development, applied AI, and cloud infrastructure."
      className="bg-surface/50 dark:bg-surface/30"
      titleClassName="text-3xl md:text-[2.75rem] md:leading-tight"
      descriptionClassName="text-base md:text-xl"
      headerClassName="mb-10 md:mb-14"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
