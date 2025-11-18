import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-orange-500/30">
      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,.6)),linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:100%_100%,24px_24px,24px_24px]" />

      <Navbar />
      <Hero />
      <Features />
      <Process />
      <CTA />

      <footer className="relative border-t border-neutral-800/80 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Agent Foundry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-white">Back to top</a>
            <a href="#contact" className="hover:text-white">Get a proposal</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App