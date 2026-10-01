import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/SocialIcons'
import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card dark:bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-primary">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-secondary">
            Full Stack & AI Engineer · {personalInfo.location}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={personalInfo.mailto}
            className="inline-flex rounded-md p-2.5 text-secondary transition-colors hover:bg-surface hover:text-accent"
            aria-label={`Email ${personalInfo.email}`}
          >
            <Mail className="size-5 pointer-events-none" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md p-2.5 text-secondary transition-colors hover:bg-surface hover:text-accent"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="pointer-events-none" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md p-2.5 text-secondary transition-colors hover:bg-surface hover:text-accent"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="pointer-events-none" />
          </a>
        </div>

        <p className="text-xs text-secondary">
          © {year} {personalInfo.name.split(' ')[0]} Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
