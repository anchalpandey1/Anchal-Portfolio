import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  Mic,
  Shield,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Mic,
  LayoutDashboard,
  Shield,
}

export function getProjectIcon(name: string): LucideIcon | undefined {
  return iconMap[name]
}
