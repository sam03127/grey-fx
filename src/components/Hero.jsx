import {useEffect,useRef} from 'react';
import {gsap} from 'gsap';

export default function Hero(){
  const section=useRef();
  const title=useRef();
  const orb=useRef();

  useEffect(()=>{
    const q=gsap.context(()=>{
      gsap.fromTo(
        title.current.querySelectorAll('.hero-item'),
        {y:45,opacity:0,filter:'blur(10px)'},
        {y:0,opacity:1,filter:'blur(0)',duration:1,stagger:.12,ease:'power4.out',delay:.2}
      );
      gsap.to(orb.current,{rotation:360,duration:28,repeat:-1,ease:'none'});
    },section);

    return()=>q.revert()
  },[]);

  return (
    <section id="home" ref={section} className="relative min-h-screen border-b border-white/10 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(214,180,106,.13),transparent_25%),linear-gradient(180deg,#080808,#050505)]"/>

      <div className="absolute -right-40 top-1/4 h-[650px] w-[650px] rounded-full border border-[#d6b46a]/10"/>

      <div ref={orb} className="absolute right-[7%] top-[28%] h-[470px] w-[470px] rounded-full border border-[#d6b46a]/20 shadow-[0_0_100px_rgba(214,180,106,.08)] hidden lg:block">
        <div className="absolute inset-10 rounded-full border border-white/5"/>
        <div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#d6b46a] shadow-[0_0_20px_#d6b46a]"/>
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <div className="font-black tracking-[-.06em] text-xl">
          GREY<span className="text-[#d6b46a]">.</span>FX
        </div>

        <div className="mono hidden text-[10px] uppercase tracking-[.28em] text-white/40 md:block">
          Creative Editing Studio / 2026
        </div>

        <a href="#contact" className="mono text-[10px] uppercase tracking-[.2em] text-white/60 hover:text-[#d6b46a] transition">
          Start a project ↗
        </a>
      </header>

      <div ref={title} className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl flex-col justify-center px-6 pb-20 md:px-12">

        <div className="hero-item mb-5 flex items-center gap-3 mono text-[10px] uppercase tracking-[.3em] text-[#d6b46a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6b46a] animate-pulse"/>
          Visuals that hit different
        </div>

        <h1 className="hero-item max-w-5xl text-[16vw] font-black leading-[.78] tracking-[-.09em] md:text-[10rem]">
          GREY<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1dfad] via-[#d6b46a] to-[#8d7040]">
            FX
          </span>
          <span className="ml-3 align-top text-2xl tracking-normal text-white/30 md:text-5xl">
            ™
          </span>
        </h1>

        <div className="mt-10 grid max-w-3xl grid-cols-1 gap-7 md:grid-cols-[1fr_auto] md:items-end">

          <p className="hero-item max-w-xl text-sm leading-7 text-white/55 md:text-base">
            We turn raw footage into cinematic edits, sharp motion graphics and visuals people remember.
          </p>

          <div className="hero-item flex gap-3">

            <a
              href="#work"
              className="rounded-full border border-[#d6b46a]/60 bg-[#d6b46a]/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#d6b46a] hover:bg-[#d6b46a] hover:text-black hover:border-[#d6b46a] transition-all duration-300"
            >
              Explore work
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:border-[#d6b46a] hover:text-[#d6b46a] transition"
            >
              Services
            </a>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 py-3">
        <div className="marquee flex w-max whitespace-nowrap mono text-[9px] uppercase tracking-[.35em] text-white/20">
          VIDEO EDITING　•　MOTION GRAPHICS　•　COLOR GRADING　•　REELS　•　CINEMATIC STORYTELLING　•　VIDEO EDITING　•　MOTION GRAPHICS　•　COLOR GRADING　•　REELS　•　CINEMATIC STORYTELLING　•
        </div>
      </div>

    </section>
  );
}
