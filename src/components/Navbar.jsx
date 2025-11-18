import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Capabilities" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "ROI" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-orange-500/20 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 ring-2 ring-orange-400/40 flex items-center justify-center shadow-[0_0_25px_rgba(251,146,60,.45)]">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm text-neutral-400">Neon</span>
                <span className="block text-lg font-semibold tracking-tight text-white">Agent Foundry</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_25px_rgba(251,146,60,.35)] hover:shadow-[0_0_35px_rgba(251,146,60,.55)] transition-shadow"
              >
                Get a proposal
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-neutral-700 text-neutral-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-neutral-800"
              >
                <div className="px-4 py-3 grid gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-neutral-200 hover:bg-neutral-800/70"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_25px_rgba(251,146,60,.35)]"
                  >
                    Get a proposal
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
