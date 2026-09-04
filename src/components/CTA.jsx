export default function CTA(){
  return <section id="contact" className="relative overflow-hidden py-32 md:py-48">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,180,106,.11),transparent_38%)]"/>

    <div className="relative mx-auto max-w-6xl px-6 text-center">
      <div className="mono mb-7 text-[10px] tracking-[.35em] text-[#d6b46a]">
        // 05 — START A PROJECT
      </div>

      <h2 className="text-[15vw] font-black leading-[.78] tracking-[-.09em] md:text-[9rem]">
        GOT<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1dfad] to-[#9a7b43]">
          FOOTAGE?
        </span>
      </h2>

      <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40">
        Tell us what you're making, what you're working with and where you want it to go. We'll take it from there.
      </p>

      <a
        href="mailto:greyfx.editing@gmail.com?subject=Grey%20FX%20Project%20Request"
        className="mt-10 inline-flex rounded-full border border-[#d6b46a]/60 bg-[#d6b46a]/10 px-8 py-4 text-xs font-bold uppercase tracking-[.18em] text-[#d6b46a] hover:bg-[#d6b46a] hover:text-black hover:border-[#d6b46a] transition-all duration-300"
      >
        Start your project ↗
      </a>

      <div className="mono mt-7 text-[9px] tracking-[.25em] text-white/20">
        greyfx.editing@gmail.com
      </div>
    </div>
  </section>
}
