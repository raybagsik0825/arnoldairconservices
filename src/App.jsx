import React, { useState } from 'react'
import {
  Wind, Snowflake, Wrench, ShieldCheck, Clock3, BadgeCheck, ArrowRight,
  Phone, Menu, X, Check, Star, MapPin, CalendarDays, ThermometerSnowflake,
  Fan, Sparkles, Building2, ChevronDown, Send, Zap
} from 'lucide-react'

const services = [
  { icon: Snowflake, title: 'Aircon Repair', text: 'Fast troubleshooting for units that are leaking, noisy, or not cooling properly.' },
  { icon: Sparkles, title: 'Deep Cleaning', text: 'Remove dust and buildup to help restore airflow and keep your indoor air fresh.' },
  { icon: Wrench, title: 'Preventive Maintenance', text: 'Routine checkups that help your aircon run efficiently and last longer.' },
  { icon: Fan, title: 'Installation & Relocation', text: 'Careful installation, replacement, and relocation for your space and setup.' },
]
const benefits = [
  { icon: Clock3, title: 'On-time service', text: 'We respect your schedule and keep you updated.' },
  { icon: ShieldCheck, title: 'Work you can trust', text: 'Clear recommendations before work begins.' },
  { icon: BadgeCheck, title: 'Experienced technicians', text: 'Practical know-how for common aircon problems.' },
]
const plans = [
  { name: 'Basic Cleaning', price: '₱799', note: 'For a quick refresh', features: ['Filter and panel cleaning', 'Evaporator inspection', 'Basic performance check'], popular: false },
  { name: 'Deep Cleaning', price: '₱1,499', note: 'Our most requested service', features: ['Thorough indoor unit cleaning', 'Drain line check', 'Cooling performance test', 'Service recommendations'], popular: true },
  { name: 'Repair Visit', price: 'From ₱500', note: 'Diagnosis first, clear quote', features: ['Initial unit inspection', 'Problem diagnosis', 'Repair estimate before work', 'Parts quoted separately'], popular: false },
]
const reviews = [
  { quote: 'They explained what was wrong and gave me the options before starting. The room finally cools down properly again.', name: 'Angela R.', place: 'Quezon City' },
  { quote: 'Booked a cleaning for our home and the whole process was smooth. Professional, tidy, and easy to talk to.', name: 'Mark D.', place: 'Pasig City' },
  { quote: 'Clear pricing and great communication. I appreciate that they checked the unit instead of pushing unnecessary repairs.', name: 'Christine L.', place: 'Marikina' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: 'Aircon Repair', location: '', date: '', details: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="overflow-hidden bg-white">
      <div className="bg-[#06172e] text-white">
        <div className="container-wide flex min-h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="flex items-center gap-2 text-blue-100"><Zap size={14} className="text-sky-300" /> Comfort you can count on, all year round.</p>
          <a href="tel:+639171234567" className="hidden items-center gap-2 font-semibold hover:text-sky-300 sm:flex"><Phone size={14} /> +63 917 123 4567</a>
        </div>
      </div>

      <header className="relative z-20 border-b border-slate-100 bg-white">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700"><Wind size={26} strokeWidth={2.4} /></span>
            <span><span className="block font-['Manrope'] text-lg font-extrabold tracking-tight text-[#0a2343]">CoolBreeze</span><span className="block text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Aircon Services</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <a className="hover:text-sky-700" href="#services">Services</a><a className="hover:text-sky-700" href="#about">Why CoolBreeze</a><a className="hover:text-sky-700" href="#pricing">Pricing</a><a className="hover:text-sky-700" href="#reviews">Reviews</a>
          </nav>
          <a href="#booking" className="hidden items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:flex">Book a service <ArrowRight size={16} /></a>
          <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white p-5 shadow-xl lg:hidden"><div className="container-wide flex flex-col gap-4 font-semibold text-slate-700"><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#about">Why CoolBreeze</a><a onClick={closeMenu} href="#pricing">Pricing</a><a onClick={closeMenu} href="#reviews">Reviews</a><a onClick={closeMenu} href="#booking" className="rounded-full bg-sky-600 px-4 py-3 text-center text-white">Book a service</a></div></nav>}
      </header>

      <main>
        <section id="home" className="hero-grid relative text-white">
          <div className="grid-dots absolute inset-0 opacity-30" />
          <div className="container-wide relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.12em] text-sky-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Your comfort is our priority</div>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[60px]">Cool air.<br /><span className="text-sky-300">Clear peace</span> of mind.</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-blue-100 sm:text-lg">Reliable aircon repair, cleaning, and maintenance for homes and businesses. Get comfortable again with service that puts you first.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 font-bold text-white shadow-xl shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-400">Book a technician <ArrowRight size={18} /></a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10">Explore services</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
                <span className="flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Upfront estimates</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Friendly technicians</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Home & office</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[530px]">
              <div className="absolute -right-5 -top-6 h-28 w-28 rounded-full border border-sky-200/20" />
              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <img className="h-[310px] w-full rounded-[1.5rem] object-cover sm:h-[400px]" src="https://images.unsplash.com/photo-1631545806609-7f7e7a7d8f9a?auto=format&fit=crop&w=1100&q=85" alt="Air conditioning unit in a modern, comfortable home" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1631545806609-7f7e7a7d8f9a?auto=format&fit=crop&w=1100&q=85' }} />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/95 p-4 text-[#10233f] shadow-xl sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
                  <div className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><ThermometerSnowflake size={25} /></span><div className="flex-1"><p className="font-extrabold">Comfort restored</p><p className="mt-1 text-xs text-slate-500 sm:text-sm">Professional care, from checkup to repair.</p></div><span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 sm:block">Cool & easy</span></div>
                </div>
              </div>
              <div className="absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl bg-white p-4 text-[#10233f] shadow-xl sm:flex"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><ShieldCheck size={22} /></span><div><p className="text-sm font-extrabold">Service you can trust</p><p className="mt-1 text-xs text-slate-500">Clear recommendations</p></div></div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white">
          <div className="container-wide grid grid-cols-2 gap-6 py-7 sm:grid-cols-4 sm:py-8">
            {[['01','Careful diagnosis'],['02','Clear estimates'],['03','Quality workmanship'],['04','Friendly support']].map(([n,t]) => <div key={n} className="flex items-center gap-3"><span className="font-['Manrope'] text-2xl font-extrabold text-sky-600">{n}</span><span className="max-w-[125px] text-sm font-bold text-slate-700">{t}</span></div>)}
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-700">What we do</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a2343] sm:text-4xl">Complete care for your aircon</h2><p className="mt-4 leading-7 text-slate-500">From small fixes to seasonal maintenance, we help keep your space comfortable when it matters most.</p></div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({icon: Icon,title,text},i) => <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white"><Icon size={27} /></span><p className="mt-6 text-xs font-extrabold tracking-widest text-sky-600">0{i+1}</p><h3 className="mt-2 text-lg font-extrabold text-[#0a2343]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p><a href="#booking" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:gap-3">Book this service <ArrowRight size={15} /></a></article>)}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f3f8fc] py-20 sm:py-24">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=85" alt="Technician working carefully on an air conditioning system" className="h-[340px] w-full rounded-[2rem] object-cover shadow-lg sm:h-[450px]" />
              <div className="absolute -bottom-5 right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-5 sm:p-6"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><Wrench size={24} /></span><div><p className="font-extrabold text-[#0a2343]">Done with care</p><p className="mt-1 text-xs text-slate-500">Every visit, every detail</p></div></div></div>
            </div>
            <div className="pt-3 lg:pl-6"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-700">The CoolBreeze difference</p><h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0a2343] sm:text-4xl">Good service should feel just as refreshing.</h2><p className="mt-5 leading-7 text-slate-600">We believe aircon service should be straightforward. We listen to the problem, explain what we find, and help you choose the right next step—without the confusing jargon.</p>
              <div className="mt-8 space-y-6">{benefits.map(({icon:Icon,title,text}) => <div key={title} className="flex gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm"><Icon size={23}/></span><div><h3 className="font-extrabold text-[#0a2343]">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div></div>)}</div>
              <a href="#booking" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0a2343] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-700">Talk to our team <ArrowRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 sm:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-700">Simple starting prices</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a2343] sm:text-4xl">Know what to expect</h2><p className="mt-4 leading-7 text-slate-500">Every unit and issue is different. These guide prices help you get started; we confirm the quote before any repair work.</p></div>
            <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
              {plans.map(plan => <article key={plan.name} className={`relative flex flex-col rounded-3xl border p-7 ${plan.popular?'border-sky-500 bg-[#0a2343] text-white shadow-2xl shadow-sky-950/15':'border-slate-200 bg-white text-[#10233f]'}`}>{plan.popular && <span className="absolute right-5 top-5 rounded-full bg-sky-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#071b36]">Popular</span>}<h3 className="text-xl font-extrabold">{plan.name}</h3><p className={`mt-2 text-sm ${plan.popular?'text-blue-100':'text-slate-500'}`}>{plan.note}</p><p className="mt-7 font-['Manrope'] text-4xl font-extrabold tracking-tight">{plan.price}</p><p className={`mt-1 text-xs ${plan.popular?'text-blue-200':'text-slate-400'}`}>starting price</p><div className={`my-7 h-px ${plan.popular?'bg-white/15':'bg-slate-100'}`}/><ul className="flex-1 space-y-4">{plan.features.map(f=><li key={f} className="flex items-start gap-3 text-sm"><Check size={17} className={`mt-0.5 shrink-0 ${plan.popular?'text-sky-300':'text-emerald-600'}`}/><span className={plan.popular?'text-blue-50':'text-slate-600'}>{f}</span></li>)}</ul><a href="#booking" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${plan.popular?'bg-sky-500 text-white hover:bg-sky-400':'bg-sky-50 text-sky-800 hover:bg-sky-100'}`}>Request a quote <ArrowRight size={16}/></a></article>)}
            </div><p className="mt-5 text-center text-xs text-slate-400">Sample pricing only. Update prices and service coverage to match your actual business.</p>
          </div>
        </section>

        <section className="bg-[#071b36] py-16 text-white">
          <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-300">Don't sweat the small stuff</p><h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">A cooler, more comfortable space starts here.</h2></div><a href="#booking" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#0a2343] transition hover:bg-sky-100">Schedule a visit <ArrowRight size={17}/></a></div>
        </section>

        <section id="reviews" className="bg-[#f8fbfe] py-20 sm:py-24">
          <div className="container-wide"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-700">Kind words</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a2343] sm:text-4xl">Comfortable customers, happy homes</h2><p className="mt-4 text-sm text-slate-500">Example testimonials for layout preview—replace with genuine customer feedback before publishing.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">{reviews.map(r=><article key={r.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"><div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map(n=><Star key={n} size={15} fill="currentColor"/>)}</div><p className="mt-5 text-sm leading-7 text-slate-600">“{r.quote}”</p><div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-extrabold text-sky-800">{r.name[0]}</span><div><p className="text-sm font-extrabold text-[#0a2343]">{r.name}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-400"><MapPin size={12}/>{r.place}</p></div></div></article>)}</div>
          </div>
        </section>

        <section id="booking" className="py-20 sm:py-24">
          <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-700">Let's get you comfortable</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a2343] sm:text-4xl">Book a service or request a quote.</h2><p className="mt-5 leading-7 text-slate-500">Tell us a little about your aircon concern. Our team can follow up to discuss availability and next steps.</p>
              <div className="mt-8 space-y-5"><a href="tel:+639171234567" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-sky-300"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700"><Phone size={22}/></span><div><p className="text-xs text-slate-400">Call us directly</p><p className="mt-1 font-extrabold text-[#0a2343]">+63 917 123 4567</p></div></a><div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700"><CalendarDays size={22}/></span><div><p className="text-xs text-slate-400">Service schedule</p><p className="mt-1 font-extrabold text-[#0a2343]">By appointment</p></div></div><div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700"><Building2 size={22}/></span><div><p className="text-xs text-slate-400">Who we serve</p><p className="mt-1 font-extrabold text-[#0a2343]">Homes, offices & small businesses</p></div></div></div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
              {sent ? <div className="py-12 text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={32}/></span><h3 className="mt-5 text-2xl font-extrabold text-[#0a2343]">Thanks, {form.name || 'there'}!</h3><p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">Your details have been captured in this demo. Connect the form to your email, CRM, or booking system to receive real requests.</p><button onClick={()=>{setSent(false);setForm({name:'',phone:'',service:'Aircon Repair',location:'',date:'',details:''})}} className="mt-6 rounded-full bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700">Send another request</button></div> :
              <form onSubmit={submit}><div className="mb-7"><h3 className="text-xl font-extrabold text-[#0a2343]">Request a service</h3><p className="mt-2 text-sm text-slate-500">Fields marked with * are required.</p></div><div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-slate-700">Your name *<input required name="name" value={form.name} onChange={update} placeholder="Juan dela Cruz" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"/></label>
                <label className="text-sm font-bold text-slate-700">Phone number *<input required name="phone" value={form.phone} onChange={update} placeholder="+63 9XX XXX XXXX" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"/></label>
                <label className="text-sm font-bold text-slate-700">Service needed *<span className="relative mt-2 block"><select required name="service" value={form.service} onChange={update} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100">{['Aircon Repair','Deep Cleaning','Preventive Maintenance','Installation & Relocation','Not sure yet'].map(s=><option key={s}>{s}</option>)}</select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-3.5 text-slate-400"/></span></label>
                <label className="text-sm font-bold text-slate-700">Your area / city *<input required name="location" value={form.location} onChange={update} placeholder="e.g. Quezon City" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"/></label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">Preferred date (optional)<input type="date" name="date" value={form.date} onChange={update} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"/></label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">Tell us about the issue (optional)<textarea name="details" value={form.details} onChange={update} rows="3" placeholder="e.g. Unit is running but not cooling..." className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"/></label>
              </div><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-4 font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700">Request a callback <Send size={17}/></button><p className="mt-4 text-center text-xs leading-5 text-slate-400">Demo form only; no information is sent until a backend or form service is connected.</p></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#06172e] py-10 text-white">
        <div className="container-wide"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center"><a href="#home" className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white"><Wind size={25}/></span><span><span className="block font-['Manrope'] text-lg font-extrabold">CoolBreeze</span><span className="block text-[10px] font-bold uppercase tracking-[.2em] text-blue-200">Aircon Services</span></span></a><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100"><a className="hover:text-white" href="#services">Services</a><a className="hover:text-white" href="#pricing">Pricing</a><a className="hover:text-white" href="#reviews">Reviews</a><a className="hover:text-white" href="#booking">Contact</a></div><a href="tel:+639171234567" className="inline-flex items-center gap-2 font-bold text-sky-300 hover:text-white"><Phone size={16}/> +63 917 123 4567</a></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs text-blue-200/70 sm:flex-row"><p>© {new Date().getFullYear()} CoolBreeze Aircon Services. All rights reserved.</p><p>Designed for comfort. Built with care.</p></div></div>
      </footer>
    </div>
  )
}

export default App
