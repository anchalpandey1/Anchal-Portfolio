import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/SocialIcons'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

const links = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: personalInfo.mailto,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anchalpandey',
    href: personalInfo.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/anchalpandey1',
    href: personalInfo.github,
    icon: GitHubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's connect"
      description="Open to engineering roles, AI product collaborations, and meaningful conversations about building intelligent systems."
      className="bg-surface/50 dark:bg-surface/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-border bg-card p-6 md:p-10"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex cursor-pointer items-start gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <div className="rounded-lg border border-border bg-card p-2.5 transition-colors group-hover:border-accent/20 group-hover:bg-accent-muted">
                <link.icon className="size-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {link.label}
                </p>
                <p className="mt-1 text-sm font-medium text-primary group-hover:text-accent">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
          <Button variant="accent" size="lg" asChild>
            <a href={personalInfo.mailto}>
              <Mail className="size-4" />
              Send Email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personalInfo.resumeUrl} download={personalInfo.resumeDownloadName}>
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
