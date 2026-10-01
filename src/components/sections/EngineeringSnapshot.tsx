import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SnapshotCard } from '@/components/snapshot/SnapshotCard'
import { engineeringSnapshot } from '@/data/portfolio'

export function EngineeringSnapshot() {
  return (
    <SectionWrapper
      id="snapshot"
      label="At a Glance"
      title="Engineering Snapshot"
      description="A quick overview of experience, product ownership, and technical focus."
      className="border-t border-border bg-surface/40 dark:bg-surface/20"
      titleClassName="text-3xl md:text-[2.75rem] md:leading-tight"
      descriptionClassName="text-base md:text-lg max-w-2xl"
      headerClassName="mb-8 md:mb-10"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {engineeringSnapshot.map((stat, index) => (
          <SnapshotCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
