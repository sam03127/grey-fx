import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Projects',
    desc: 'High-end cinematic reels, 3D visuals, and premium editing showcases.',
  },
  {
    title: 'Presets',
    desc: 'Custom color grading packs and aesthetic transitions for creators.',
  },
  {
    title: 'Payments',
    desc: 'Smooth payment gateway for instant services and editing packages.',
  },
  {
    title: 'Editing Samples',
    desc: 'Watch powerful before & after edits with unreal cinematic effects.',
  },
  {
    title: 'Editing Prices',
    desc: 'Video Edit — ₹250 | Picture Colour Grading — ₹150',
  },
  {
    title: 'Contact Us',
    desc: 'Mail us anytime at greyfx.india@gmail.com for edits, presets & collaborations.',
  },
]

export default function GreyFXWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />

        {/* Fixed gradient syntax */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.15)]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full border border-gray-400/20"
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex flex-wrap items-center justify-between px-10 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-3xl font-black tracking-[6px] uppercase text-white">
          GREY FX
        </h1>

        <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[3px] text-gray-300 mt-4 md:mt-0">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#presets" className="hover:text-white transition">
            Presets
          </a>
          <a href="#payments" className="hover:text-white transition">
            Payments
          </a>
          <a href="#samples" className="hover:text-white transition">
            Editing Samples
          </a>
          <a href="#prices" className="hover:text-white transition">
            Editing Prices
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-[12px] uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            GREY FX
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed">
            Cinematic edits. Unreal aesthetics. Creative motion design.
            Enter the world of premium visuals, futuristic presets, and
            next-level editing experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Explore Projects
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              View Presets
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute right-20 top-40 hidden lg:block w-44 h-44 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.2)]"
        />
      </section>

      {/* Categories */}
      <section className="relative z-10 px-8 md:px-20 pb-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 shadow-inner">
                ✦
              </div>

              <h2 className="text-2xl font-bold mb-4 tracking-wide">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>

              {item.title === 'Editing Samples' && (
                <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                  <video
                    className="w-full h-48 object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/0509 (1)(1).mp4" type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-40 left-10 w-32 h-32 rounded-3xl border border-white/10 rotate-12 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.12)]"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + i,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 10) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 tracking-[4px] uppercase text-sm backdrop-blur-md bg-white/5">
        <div className="flex justify-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />
          <div className="w-3 h-3 rounded-full bg-gray-400 shadow-[0_0_15px_gray]" />
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />
        </div>

        <p>Grey FX © 2026 — Crafted with cinematic aesthetics.</p>

        <div className="mt-4 text-xs tracking-[3px] text-gray-600 uppercase">
          Ownership of this website is Sam
        </div>
      </footer>
    </div>
  )
}
