import { Brain, Mic, Network, Rocket, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Brain,
  Network,
  Mic,
}

export function getHighlightIcon(name: string): LucideIcon | undefined {
  return iconMap[name]
}
