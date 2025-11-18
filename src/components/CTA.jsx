import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-neutral-950/70 p-10 sm:p-14 shadow-[0_0_40px_rgba(251,146,60,.08)]">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(251,146,60,.12),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-4xl font-bold text-white">
              Ready to replace repetitive roles with AI Agents?
            </h3>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Share your goals and current tools. We’ll send a proposal with a clear timeline, estimated impact, and transparent pricing.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <input placeholder="Name" className="rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <input placeholder="Email" className="rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <input placeholder="Company" className="rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <input placeholder="Role(s) to replace" className="rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <textarea placeholder="What outcomes are you targeting?" rows={4} className="sm:col-span-2 rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="sm:col-span-2 mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 font-semibold text-black shadow-[0_0_25px_rgba(251,146,60,.35)] hover:shadow-[0_0_35px_rgba(251,146,60,.55)] transition-shadow"
              >
                Get my proposal
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
