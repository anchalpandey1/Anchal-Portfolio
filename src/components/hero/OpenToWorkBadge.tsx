import { motion } from 'framer-motion'

export function OpenToWorkBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-400"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 dark:bg-emerald-500" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
      </span>
      Open To Work
    </motion.div>
  )
}
