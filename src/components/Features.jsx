import { Brain, Workflow, Headphones, Gauge, Shield, PlugZap } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Brain,
    title: 'Reasoning & Tools',
    desc: 'Agents with structured thought, tool-use, and memory tuned to your workflows.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    desc: 'From inbound requests to back-office ops, we automate end-to-end workflows.'
  },
  {
    icon: Headphones,
    title: 'Omnichannel Support',
    desc: 'Voice, chat, email – consistent, brand-safe responses with escalation paths.'
  },
  {
    icon: Gauge,
    title: 'Speed & Scale',
    desc: 'Sub-second responses and horizontal scaling for spikes and seasonality.'
  },
  {
    icon: Shield,
    title: 'Safety & Guardrails',
    desc: 'Policy layers, red-teaming, and audit trails for compliance and governance.'
  },
  {
    icon: PlugZap,
    title: 'Systems Integration',
    desc: 'CRM, helpdesk, databases, calendars – we wire agents into your stack.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(251,146,60,.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What our Agents can do</h2>
          <p className="mt-3 text-neutral-300">We build specialized AI that plugs into your software and operates with measurable KPIs.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,.35)]">
                <Icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
