import { Brain, Briefcase, MapPin, Rocket, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Rocket,
  Brain,
  MapPin,
}

export function getSnapshotIcon(name: string): LucideIcon | undefined {
  return iconMap[name]
}
