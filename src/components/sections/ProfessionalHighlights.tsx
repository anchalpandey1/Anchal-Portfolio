import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { HighlightCard } from '@/components/highlights/HighlightCard'
import { professionalHighlights } from '@/data/portfolio'

export function ProfessionalHighlights() {
  return (
    <SectionWrapper
      id="highlights"
      label="Engineering Impact"
      title="Professional Highlights"
      description="Key engineering accomplishments across AI systems, backend platforms, and production product development."
      titleClassName="text-3xl md:text-[2.75rem] md:leading-tight"
      descriptionClassName="text-base md:text-xl max-w-3xl"
      headerClassName="mb-8 md:mb-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {professionalHighlights.map((highlight, index) => (
          <HighlightCard key={highlight.id} highlight={highlight} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
