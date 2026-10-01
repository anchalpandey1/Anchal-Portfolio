import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react'
import { OpenToWorkBadge } from '@/components/hero/OpenToWorkBadge'
import { ProfilePhoto } from '@/components/hero/ProfilePhoto'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-[62vh] flex-col justify-center pt-16 pb-3"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-3 md:py-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* Profile photo — first on mobile, right on desktop */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <ProfilePhoto
              src={personalInfo.profilePhoto}
              fallback={personalInfo.profilePhotoFallback}
              alt={`${personalInfo.name} — Professional profile photo`}
            />
          </motion.div>

          {/* Content — second on mobile, left on desktop */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            {personalInfo.openToWork && (
              <motion.div variants={item} className="mb-3 flex justify-center lg:justify-start">
                <OpenToWorkBadge />
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 inline-flex justify-center lg:justify-start"
            >
              <span className="rounded-lg border border-accent/15 bg-accent-muted px-3 py-1.5 text-sm font-semibold text-accent md:text-base">
                Building AI-Powered Products
              </span>
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-3 max-w-xl text-base leading-snug text-secondary md:text-lg lg:mx-0 line-clamp-2"
            >
              {personalInfo.heroDescription}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary">
                <MapPin className="size-3" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
                <Sparkles className="size-3" aria-hidden="true" />
                {personalInfo.experience} Experience
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary">
                AI / LLM
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
            >
              <Button variant="accent" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={personalInfo.resumeUrl} download={personalInfo.resumeDownloadName}>
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.p variants={item} className="mt-4 text-sm text-secondary">
              <a
                href="#contact"
                className="font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Get in touch →
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
