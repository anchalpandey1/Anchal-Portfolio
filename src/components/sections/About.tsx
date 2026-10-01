import { motion } from 'framer-motion'
import { Brain, Code2, Layers } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { about, personalInfo } from '@/data/portfolio'

const cards = [
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    description: about.focus,
  },
  {
    icon: Brain,
    title: 'Applied AI & LLMs',
    description:
      'Production experience with RAG pipelines, LangChain, OpenAI/Gemini integrations, embeddings, and voice-first AI systems.',
  },
  {
    icon: Layers,
    title: 'Engineering Philosophy',
    description: about.philosophy,
  },
]

export function About() {
  return (
    <SectionWrapper
      id="about"
      label="About"
      title="Engineering products that scale"
      description={about.journey}
      className="pt-6 md:pt-8"
      headerClassName="mb-8 md:mb-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-xl border border-border bg-card p-5 md:p-6"
      >
        <p className="text-lg leading-relaxed text-secondary">{personalInfo.summary}</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/15 hover:shadow-elevated dark:hover:shadow-glow"
          >
            <div className="mb-4 inline-flex rounded-lg border border-border bg-border-subtle p-2.5">
              <card.icon className="size-5 text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-primary">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
