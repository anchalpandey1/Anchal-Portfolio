import { useState } from 'react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { EmploymentTimelineItem } from '@/components/experience/EmploymentTimelineItem'
import { employmentHistory } from '@/data/portfolio'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('mashmari')

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Career timeline"
      description="Employment history and professional progression across AI product engineering, backend development, and full-stack roles."
      titleClassName="text-3xl md:text-[2.75rem] md:leading-tight"
      descriptionClassName="text-base md:text-lg max-w-2xl"
      headerClassName="mb-8 md:mb-10"
    >
      <div className="relative">
        {employmentHistory.map((entry, index) => (
          <EmploymentTimelineItem
            key={entry.id}
            entry={entry}
            index={index}
            isExpanded={expandedId === entry.id}
            isLast={index === employmentHistory.length - 1}
            onToggle={() => handleToggle(entry.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
