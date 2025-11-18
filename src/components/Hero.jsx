import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dark overlay + gradient accents */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(251,146,60,0.15),transparent)]" />
      <div className="absolute inset-0 bg-neutral-950/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white"
            >
              Replace roles. Grow margins.
              <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Deploy custom AI Agents that work 24/7</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-neutral-300 max-w-2xl"
            >
              We design, train and integrate AI Agents that reliably handle customer support, lead qualification, operations and more—so your team can focus on the moves that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 font-semibold text-black shadow-[0_0_25px_rgba(251,146,60,.35)] hover:shadow-[0_0_35px_rgba(251,146,60,.55)] transition-shadow">
                Get a proposal
              </a>
              <a href="#features" className="rounded-xl border border-neutral-700/80 bg-neutral-900/60 px-6 py-3 font-semibold text-neutral-200 hover:bg-neutral-800/60 transition-colors">
                Explore capabilities
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-6 text-neutral-400 text-sm">
              <div>
                <div className="text-3xl font-extrabold text-white">60-80%</div>
                Average cost reduction
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white"><span className="text-orange-400">24/7</span></div>
                Always-on availability
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">10x</div>
                Faster cycle times
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">99.9%</div>
                Response SLAs
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  );
}
