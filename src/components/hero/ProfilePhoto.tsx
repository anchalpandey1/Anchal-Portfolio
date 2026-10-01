import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProfilePhotoProps {
  src: string
  fallback: string
  alt: string
  className?: string
}

export function ProfilePhoto({ src, fallback, alt, className }: ProfilePhotoProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn('relative mx-auto lg:mx-0', className)}
    >
      <div className="group relative size-[280px] md:size-[300px] lg:size-[320px]">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="relative size-full overflow-hidden rounded-full border-2 border-card bg-card shadow-card ring-1 ring-border transition-transform duration-300 group-hover:scale-[1.02] dark:border-border dark:shadow-glow">
          <img
            src={imgSrc}
            alt={alt}
            width={320}
            height={320}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="size-full object-cover object-center"
            onError={() => setImgSrc(fallback)}
          />
        </div>
      </div>
    </motion.div>
  )
}
