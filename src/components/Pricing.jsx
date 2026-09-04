import { useState } from 'react';

const plans = [
  ['VIDEO EDIT', '₹600', 'Cinematic edits / reels / short-form', '01'],
  ['PHOTO GRADE', '₹450', 'Colour grading / cleanup / finishing', '02'],
  ['REELS', '₹450+', 'Short-form reels / Instagram edits', '03'],
  ['MOTION GRAPHICS', '₹1500', 'Motion graphics / campaigns / animated visuals', '04']
];

export default function Pricing() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section
      id="pricing"
      className="border-b border-white/10 bg-[#080808] py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mono mb-4 text-[10px] tracking-[.35em] text-[#d6b46a]">
              // 03 — SIMPLE PRICING
            </div>

            <h2 className="text-5xl font-black tracking-[-.06em] md:text-8xl">
              CHOOSE <span className="text-white/25">YOUR</span> FRAME.
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-white/35">
            Starting prices. Final quote depends on footage, complexity and turnaround.
          </p>
        </div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-4">

          {plans.map(([t, p, d, n]) => {
            const isMotionGraphics = t === 'MOTION GRAPHICS';

            return (
              <div
                key={t}
                onClick={() => {
                  if (isMotionGraphics) {
                    setShowProjects(true);
                  }
                }}
                className={`border-b border-r border-white/10 p-7 md:p-9 ${
                  isMotionGraphics
                    ? 'cursor-pointer transition-all duration-300 hover:bg-[#d6b46a]/[.05] hover:border-[#d6b46a]/40'
                    : ''
                }`}
              >

                <div className="flex justify-between mono text-[9px] text-white/30">
                  <span>{n}</span>
                  <span>GREY FX</span>
                </div>

                <h3 className="mt-16 text-xl font-bold tracking-tight">
                  {t}
                </h3>

                <div className="mt-3 text-5xl font-black tracking-[-.06em] text-[#d6b46a]">
                  {p}
                </div>

                <p className="mt-5 max-w-xs text-xs leading-6 text-white/35">
                  {d}
                </p>

                {isMotionGraphics ? (
                  <div className="mt-9 text-[10px] font-bold uppercase tracking-[.2em] text-[#d6b46a]">
                    View Projects →
                  </div>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-9 inline-block text-[10px] font-bold uppercase tracking-[.2em] text-white/70 hover:text-[#d6b46a]"
                  >
                    Request an edit →
                  </a>
                )}

              </div>
            );
          })}

        </div>
      </div>

      {/* MOTION GRAPHICS PROJECTS */}
      {showProjects && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[#050505]/95 backdrop-blur-xl">

          <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">

            <div className="mb-12 flex items-center justify-between">

              <div>
                <div className="mono mb-3 text-[10px] tracking-[.35em] text-[#d6b46a]">
                  // MOTION GRAPHICS
                </div>

                <h2 className="text-4xl font-black tracking-[-.06em] md:text-7xl">
                  SELECTED <span className="text-white/25">WORK.</span>
                </h2>
              </div>

              <button
                onClick={() => setShowProjects(false)}
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/70 transition hover:border-[#d6b46a] hover:text-[#d6b46a]"
              >
                Close ×
              </button>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.02]">

                <img
                  src="/grey-fx/assets/projects/motion-graphics/motion1.png"
                  alt="Motion Graphics Project 1"
                  className="block w-full h-auto object-contain"
                />

                <div className="mono px-5 py-4 text-[9px] uppercase tracking-[.25em] text-white/30">
                  Motion Graphics / Project 01
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
