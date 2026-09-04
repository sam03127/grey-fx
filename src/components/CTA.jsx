import {useState} from 'react';

export default function CTA(){
  const [form,setForm]=useState({
    firstName:'',
    lastName:'',
    description:''
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const subject=encodeURIComponent(
      `Grey FX Project Request — ${form.firstName} ${form.lastName}`
    );

    const body=encodeURIComponent(
      `Hello Grey FX,\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n\n` +
      `Project Description:\n${form.description}\n\n` +
      `Thank you.`
    );

    window.location.href=
      `mailto:greyfxindia@gmail.com?subject=${subject}&body=${body}`;
  };

  return <section id="contact" className="relative overflow-hidden py-32 md:py-48">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,180,106,.11),transparent_38%)]"/>

    <div className="relative mx-auto max-w-5xl px-6">

      <div className="text-center">
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
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-3xl">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mono mb-3 block text-[9px] uppercase tracking-[.25em] text-white/40">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#d6b46a]/60 focus:bg-[#d6b46a]/[.03] transition"
            />
          </div>

          <div>
            <label className="mono mb-3 block text-[9px] uppercase tracking-[.25em] text-white/40">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#d6b46a]/60 focus:bg-[#d6b46a]/[.03] transition"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="mono mb-3 block text-[9px] uppercase tracking-[.25em] text-white/40">
            Describe Your Edit
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Tell us about your project, the type of edit you need, duration, style, references, etc."
            required
            rows="7"
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[.03] px-5 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 focus:border-[#d6b46a]/60 focus:bg-[#d6b46a]/[.03] transition"
          />
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">

          <div className="mono text-[9px] tracking-[.2em] text-white/20">
            YOUR REQUEST WILL BE SENT TO GREY FX
          </div>

          <button
            type="submit"
            className="rounded-full border border-[#d6b46a]/60 bg-[#d6b46a]/10 px-8 py-4 text-xs font-bold uppercase tracking-[.18em] text-[#d6b46a] hover:bg-[#d6b46a] hover:text-black hover:border-[#d6b46a] transition-all duration-300"
          >
            Send Project Request ↗
          </button>

        </div>

      </form>

      <div className="mono mt-12 text-center text-[9px] tracking-[.25em] text-white/20">
        greyfxindia@gmail.com
      </div>

    </div>
  </section>
}
