import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery & ROI Model',
    desc: 'We identify the roles and tasks with the highest leverage and model ROI scenarios.'
  },
  {
    title: 'Agent Blueprint',
    desc: 'Design the agent’s skills, guardrails, integrations, and success metrics.'
  },
  {
    title: 'Build & Integrate',
    desc: 'We implement, connect to your tools, and run pilot programs with tight feedback loops.'
  },
  {
    title: 'Scale & Govern',
    desc: 'Roll out safely across teams with dashboards, human-in-the-loop, and compliance.'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
          <p className="mt-3 text-neutral-300">A proven path from idea to production agents that deliver measurable outcomes.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6"
            >
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-bold flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,.35)]">
                {i + 1}
              </div>
              <h3 className="ml-8 text-lg font-semibold text-white">{s.title}</h3>
              <p className="ml-8 mt-2 text-sm text-neutral-300">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
