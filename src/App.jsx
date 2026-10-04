import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Search, Check, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const U = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const ENQUIRY_EMAIL = "odonkorraphael9@gmail.com";
const IMG = {
  hero: "photo-1600607687939-ce8a6c25118c",
  texture: "photo-1486406146926-c627a92ad1ab",
};

const DEVELOPERS = [
  { name: "Devtraco", area: "Location not verified", focus: "Ghanaian real-estate developer offering homes and apartments.", projects: "Devtraco Courts is mentioned in a company-site testimonial; project location and current availability are unverified.", source: "https://devtraco.com/", sourceLabel: "Official website", evidence: "Company source" },
  { name: "Appolonia City", area: "Accra", focus: "Master-planned development offering residential, commercial and industrial space.", projects: "Company pages name Nova Ridge, The Oxford and Appolonia Industrial Park.", source: "https://www.appolonia.com.gh/now-selling/nova-ridge/", sourceLabel: "Official projects", evidence: "Company source" },
  { name: "Regimanuel Gray", area: "Accra", focus: "Residential homes for sale in Ghana.", projects: "Company listings include East Legon Hills and Satellite City; availability may change.", source: "https://regimanuelgray.com/properties-sitemap.xml", sourceLabel: "Official property listings", evidence: "Company source" },
  { name: "Trasacco Group", area: "Location not verified", focus: "The group identifies Trasacco Estates Development Company Ltd. as its property developer.", projects: "Specific project names and locations were not confirmed in the company sources reviewed.", source: "https://trasaccogroup.com/development", sourceLabel: "Official development page", evidence: "Company source · project details limited" },
  { name: "Lakeside Estates", area: "Accra", focus: "Residential estate and housing in Accra, Ghana.", projects: "The company site describes Lakeside Estate; other specific project details were not confirmed.", source: "https://lakesideestate.com/", sourceLabel: "Official website", evidence: "Company source" },
  { name: "Denya Developers", area: "Accra", focus: "Developer of premium, low-density apartments in Accra, according to its company site.", projects: "Specific project names and locations were not confirmed in the company source reviewed.", source: "https://denyadevelopers.com/", sourceLabel: "Official website", evidence: "Company source · project details limited" },
  { name: "Clifton Homes", area: "Accra", focus: "Residential property developer in Ghana.", projects: "Company pages feature The Lennox in Airport Residential and The Dunes.", source: "https://www.cliftonghana.com/our-projects", sourceLabel: "Official projects", evidence: "Company source" },
  { name: "Chain Homes", area: "Accra", focus: "Home design and construction in Ghana.", projects: "The company names Chain Homes Airport Valley, near Airport Hills, Accra.", source: "https://www.chainhomes.org/", sourceLabel: "Official website", evidence: "Company source" },
  { name: "Primrose Properties", area: "Tema", focus: "Residential property developer; the company styles its name as Primrose Properties LTD.", projects: "Company site describes Ghacem Towers at Community 13, Sakumono.", source: "http://www.primroseproperties.net/", sourceLabel: "Company website", evidence: "Company source" },
  { name: "Whitewall Properties", area: "Accra", focus: "Ghanaian-owned real-estate company developing apartments and townhouses in Accra.", projects: "Company site identifies Woodbridge in Labone. The legal “Limited” suffix was not confirmed from the site.", source: "https://whitewallproperties.com/woodbridge-labone/", sourceLabel: "Official Woodbridge page", evidence: "Company source" },
  { name: "Properties Portfolio Ghana", area: "Location not verified", focus: "The submitted company name could not be matched to an accessible official source.", projects: "Company identity, projects, Ghana operations and official website remain unverified.", source: null, sourceLabel: null, evidence: "Details unverified" },
  { name: "ToBlues Properties", area: "Location not verified", focus: "The submitted company name could not be matched to an accessible official source.", projects: "Company identity, projects, Ghana operations and official website remain unverified.", source: null, sourceLabel: null, evidence: "Details unverified" },
  { name: "GreenPark Properties", area: "Location not verified", focus: "Company website describes a property offering in Ghana; the developer role was not confirmed.", projects: "Specific project names and locations were not confirmed. The legal “Limited” suffix was not verified.", source: "https://greenparkproperties.com/", sourceLabel: "Company website", evidence: "Company source · details limited" },
  { name: "DP Group Homes", area: "Accra", focus: "Home builder using the DP Group Homes brand; the legal “Limited” suffix was not verified.", projects: "Company developments page names Kingfisher Court in Adjiringanor, Accra.", source: "https://dpgroupltd.com/current-developments/", sourceLabel: "Official developments", evidence: "Company source" },
  { name: "Swami India Ghana", area: "Location not verified", focus: "Company site markets property-specific estimates in Ghanaian cedis.", projects: "Named projects and locations were not confirmed. The legal “Limited” suffix was not verified.", source: "https://swamiindiaghanaltd.com/", sourceLabel: "Company website", evidence: "Company source · details limited" },
  { name: "ADOM City Estate", area: "Afienya Mataheko", focus: "Real-estate developer according to the company site; the legal “Limited” suffix was not verified.", projects: "The company project page is titled “Afienya Mataheko.” The page does not state a more precise site or street address.", source: "https://adomcityestate.com/index.php/afienya-mataheko/", sourceLabel: "Official project page", evidence: "Company source · exact address not stated" },
  { name: "Goldkey Properties", area: "Accra", focus: "Property development for sale and rent in Accra.", projects: "Company page names Cantonments, Airport Residential Area, Ridge, Labone, East Legon, Abelemkpe and Tse Addo.", source: "https://goldkeyghana.com/who-we-are/", sourceLabel: "Official company profile", evidence: "Company source" },
  { name: "EarlBeam Realty", area: "Accra", focus: "Real-estate company profile identifies its headquarters as Accra; legal registration is unverified.", projects: "The Earl in Cantonments was reported in 2022; its current status is unverified.", source: "https://www.linkedin.com/company/earlbeam-realty/", sourceLabel: "Company LinkedIn", evidence: "Company profile · project status unverified", extraSource: "https://thebftonline.com/2022/03/17/the-earl-is-coming-to-cantonments/", extraLabel: "2022 project report" },
  { name: "Shandonia Properties", area: "Tema", focus: "Public-facing name and Ghana real-estate activity appear on the company's social channels; legal registration is unverified.", projects: "Company social profile identifies Shandonia Garden in Tema Community 23; current project details are unverified.", source: "https://www.instagram.com/shandoniapropertiesghana/", sourceLabel: "Company Instagram", evidence: "Company social profile · details limited" },
  { name: "RockHill Properties", area: "Accra", focus: "Company profile describes a real-estate investment and development business in Accra; legal status is unverified.", projects: "Dodowa, East Legon Hills and Oyarifa appear in company social posts; project scope and availability are unverified.", source: "https://www.instagram.com/rockhillpropertieslimited/", sourceLabel: "Company Instagram", evidence: "Company social profile · details limited" },
  { name: "Mobus Properties", area: "Accra", focus: "Company site describes residential development and property management in Ghana.", projects: "Projects page names The Monarch Residence; its exact neighbourhood was not confirmed.", source: "https://mobusproperty.com.gh/projects/", sourceLabel: "Official projects", evidence: "Company source" },
  { name: "Summerhill Estates", area: "Accra", focus: "Company announcement names Summerhill Estates Company Limited; present-day registry status is unverified.", projects: "The George page describes a development in East Legon Hills. Site materials reviewed are older; current availability is unverified.", source: "https://summerhillestate.com/properties/the-george/", sourceLabel: "Official project page", evidence: "Company source · current status unverified" },
  { name: "Myla Homes", area: "Location not verified", focus: "Company website presents Myla Homes as a real-estate development business.", projects: "The projects page lists The Renaissance; location and current status could not be verified.", source: "https://mylahomesgh.com/our-projects/", sourceLabel: "Official projects", evidence: "Company source · details limited" },
  { name: "Golden Coast Developers", area: "Location not verified", focus: "Company website uses this name; Ghana operations were not confirmed from accessible company pages.", projects: "Projects page exposed only a heading and homepage served placeholder text when checked; details are unverified.", source: "https://goldencoastdevelopers.com/", sourceLabel: "Company website", evidence: "Details unverified" },
  { name: "VAAL Real Estate Ghana", area: "Accra", focus: "Company describes itself as a real-estate developer in Accra; legal registration is unverified.", projects: "Company development pages list Accra locations including Airport Residential, Airport West, Cantonments, Labone and Ridge.", source: "https://vaal.com.gh/vaal-developments/", sourceLabel: "Official developments", evidence: "Company source" },
].map((developer, index) => ({
  ...developer,
  image: [
    "photo-1600596542815-ffad4c1539a9",
    "photo-1545324418-cc1a3fa10c00",
    "photo-1564013799919-ab600027ffc6",
    "photo-1613490493576-7fde63acd811",
    "photo-1512917774080-9991f1c4c750",
    "photo-1560448204-e02f11c3d0e2",
    "photo-1600607687939-ce8a6c25118c",
    "photo-1600607687920-4e2a09cf159d",
    "photo-1600566753086-00f18fb6b3ea",
  ][index % 9],
}));
const AREAS = ["All locations", "Accra", "Tema", "Afienya Mataheko", "Location not verified"];
const TYPEWRITER_MESSAGES = ["> compare Ghana developers", "> explore projects by location", "> check project details at source", "> buy with local due diligence"];

const Btn = ({ children, href = "#", bg = "var(--gold)", fg = "var(--obsidian)", slide = "var(--ivory)", className = "" }) => (
  <a href={href} className={`btn ${className}`} style={{ background: bg, color: fg }}>
    <span className="slide" style={{ background: slide }} />
    <span>{children}</span>
  </a>
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["Developers", "#listings"], ["Why HomeGrid", "#features"], ["Buying guide", "#process"], ["Due diligence", "#due-diligence"]];
  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl rounded-full px-5 py-3 flex items-center justify-between transition-all duration-500 border ${scrolled ? "backdrop-blur-xl border-black/10" : "border-transparent"}`}
      style={{ background: scrolled ? "rgba(250,248,245,.6)" : "transparent", color: scrolled ? "var(--obsidian)" : "var(--ivory)" }}>
      <a href="#top" className="font-bold text-lg tracking-tight">HomeGrid</a>
      <div className="hidden md:flex gap-7 text-sm">
        {links.map(([l, h]) => <a key={l} href={h} className="lift">{l}</a>)}
      </div>
      <div className="hidden md:block"><Btn href="#listings" className="!py-2 !px-4 text-sm">Explore Developers</Btn></div>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-[2rem] p-6 flex flex-col gap-4 text-[var(--obsidian)] bg-[var(--ivory)] shadow-xl md:hidden">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <Btn href="#listings">Explore Developers</Btn>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".h-in", { y: 40, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.08, delay: 0.2 });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="top" ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      <img src={U(IMG.hero, 2000)} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/60 to-black/30" />
      <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24 max-w-5xl text-[var(--ivory)]">
        <p className="h-in font-data text-xs md:text-sm mb-4" style={{ color: "var(--gold)" }}>A guide to Ghana's property developers</p>
        <h1 className="h-in font-bold text-4xl md:text-6xl leading-none">Find your place in</h1>
        <h1 className="h-in font-drama text-6xl md:text-[10rem] leading-[0.95] -mt-1" style={{ color: "var(--gold)" }}>Ghana.</h1>
        <p className="h-in mt-6 max-w-md text-base md:text-lg opacity-80">Explore established real-estate developers, discover their projects and follow the links to official company information.</p>
        <div className="h-in mt-8"><Btn href="#listings">Explore Developers</Btn></div>
      </div>
    </section>
  );
}

function Listings() {
  const [area, setArea] = useState("All locations");
  const [query, setQuery] = useState("");
  const list = DEVELOPERS.filter((developer) => {
    const matchesArea = area === "All locations" || developer.area === area;
    const matchesQuery = `${developer.name} ${developer.focus} ${developer.projects} ${developer.area}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesArea && matchesQuery;
  });
  return (
    <section id="listings" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
      <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>Ghana developer directory · 25 companies</p>
      <h2 className="mt-3 font-bold text-3xl md:text-5xl text-[var(--obsidian)]">Meet the builders of <span className="font-drama" style={{ color: "var(--gold)" }}>Ghana</span></h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--slate)]/75">Company and project details are summarized from public sources, primarily company websites and profiles, reviewed 4 October 2026. A source link is provided where available. “Unverified” means we could not confirm that detail; project availability and legal registration should be checked directly.</p>
      <label className="mt-8 flex max-w-2xl items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
        <Search size={18} className="shrink-0 opacity-50" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search a developer, project or area" aria-label="Search developers, projects or locations" className="w-full bg-transparent text-sm outline-none placeholder:text-black/45" />
      </label>
      <div className="flex flex-wrap gap-2 mt-8">
        {AREAS.map((location) => (
          <button key={location} onClick={() => setArea(location)} className="lift rounded-full px-5 py-2 text-sm border border-black/10"
            aria-pressed={area === location} style={area === location ? { background: "var(--obsidian)", color: "var(--ivory)" } : { background: "white" }}>{location}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {list.map((developer) => (
          <article key={developer.name} className="flex flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_40px_-20px_rgba(13,13,18,.2)]">
            <div className="relative h-52 overflow-hidden bg-[var(--slate)]">
              <img src={U(developer.image, 800)} alt={`Illustrative Ghana property image for ${developer.name}; not a verified company project`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <span className="absolute bottom-3 left-4 rounded-full bg-[var(--obsidian)]/80 px-3 py-1.5 font-data text-[10px] uppercase tracking-wide text-[var(--ivory)]">Illustrative image · not project-specific</span>
              <span className="absolute right-4 top-4 rounded-full bg-[var(--ivory)] px-3 py-1 font-data text-[10px]" style={{ color: "#8a6f1f" }}>GH · {String(DEVELOPERS.indexOf(developer) + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex items-center justify-end border-b border-black/5 bg-[var(--ivory)] px-6 py-3">
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-data text-[10px]">{developer.area}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-bold text-xl text-[var(--obsidian)]">{developer.name}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{developer.focus}</p>
              <p className="mt-4 text-sm leading-relaxed"><span className="font-semibold text-[var(--obsidian)]">Projects & places: </span><span className="opacity-75">{developer.projects}</span></p>
              <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-black/5 pt-5">
                <span className="font-data text-[10px] uppercase tracking-wide opacity-60">{developer.evidence}</span>
                {developer.source && <a href={developer.source} target="_blank" rel="noopener noreferrer" className="lift inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--obsidian)] underline decoration-[var(--gold)] underline-offset-4">{developer.sourceLabel}<ExternalLink size={14} /></a>}
                {developer.extraSource && <a href={developer.extraSource} target="_blank" rel="noopener noreferrer" className="lift inline-flex items-center gap-1.5 text-sm text-[var(--obsidian)] underline decoration-[var(--gold)] underline-offset-4">{developer.extraLabel}<ExternalLink size={14} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 text-center text-sm opacity-70">No developers match that search. Try a company, project name or location.</p>}
    </section>
  );
}

const cardCls = "bg-[var(--ivory)] border border-black/10 rounded-[2rem] p-8 shadow-[0_20px_40px_-20px_rgba(13,13,18,.3)] h-[26rem] flex flex-col";

function Shuffler() {
  const [items, setItems] = useState(["Company source linked", "Project details noted", "Location information checked"]);
  useEffect(() => {
    const t = setInterval(() => setItems((a) => { const b = [...a]; b.unshift(b.pop()); return b; }), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={cardCls}>
      <h3 className="font-bold text-xl text-[var(--obsidian)]">Company details</h3>
      <p className="text-sm opacity-70 mt-1">A starting point for independent property research.</p>
      <div className="relative flex-1 mt-6">
        {items.map((t, i) => (
          <div key={t} className="absolute left-0 right-0 rounded-[1.5rem] p-4 flex items-center gap-3 border border-black/10 bg-white"
            style={{ top: i * 22, transform: `scale(${1 - i * 0.05})`, opacity: 1 - i * 0.25, zIndex: 3 - i, transition: "all .6s cubic-bezier(.34,1.56,.64,1)" }}>
            <span className="grid place-items-center w-7 h-7 rounded-full" style={{ background: "var(--gold)" }}><Check size={14} /></span>
            <span className="font-data text-xs">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Typewriter() {
  const [txt, setTxt] = useState("");
  useEffect(() => {
    let m = 0, c = 0, timer;
    const tick = () => {
      if (c <= TYPEWRITER_MESSAGES[m].length) {
        const charIndex = c - 1;
        setTxt((p) => (charIndex < 0 ? "" : p + TYPEWRITER_MESSAGES[m][charIndex]));
        c++;
        timer = setTimeout(tick, 45);
      } else { timer = setTimeout(() => { m = (m + 1) % TYPEWRITER_MESSAGES.length; c = 0; tick(); }, 1400); }
    };
    tick();
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={cardCls}>
      <h3 className="font-bold text-xl text-[var(--obsidian)]">Source-first research</h3>
      <p className="text-sm opacity-70 mt-1">Follow company links and check details before making a decision.</p>
      <div className="flex items-center gap-2 mt-6 font-data text-xs"><span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />Public sources</div>
      <div className="flex-1 mt-3 rounded-[1.5rem] p-5 font-data text-sm" style={{ background: "var(--obsidian)", color: "var(--ivory)" }}>
        {txt}<span className="cursor-blink" style={{ color: "var(--gold)" }}>▌</span>
      </div>
    </div>
  );
}

function Scheduler() {
  const box = useRef(), cur = useRef(), save = useRef();
  const [active, setActive] = useState(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const pos = (el) => { const b = box.current.getBoundingClientRect(), r = el.getBoundingClientRect(); return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2 }; };
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      const day = box.current.querySelector('[data-day="3"]');
      tl.set(cur.current, { x: 10, y: 160, opacity: 0 }).call(() => setActive(null))
        .to(cur.current, { opacity: 1, duration: 0.3 })
        .to(cur.current, { ...pos(day), duration: 1, ease: "power2.inOut" })
        .to(cur.current, { scale: 0.85, duration: 0.12, yoyo: true, repeat: 1 })
        .call(() => setActive(3))
        .to(cur.current, { ...pos(save.current), duration: 0.9, ease: "power2.inOut" }, "+=0.4")
        .to(cur.current, { scale: 0.85, duration: 0.12, yoyo: true, repeat: 1 })
        .to(cur.current, { opacity: 0, duration: 0.4 }, "+=0.2");
    }, box);
    return () => ctx.revert();
  }, []);
  return (
    <div className={cardCls}>
      <h3 className="font-bold text-xl text-[var(--obsidian)]">Before you commit</h3>
      <p className="text-sm opacity-70 mt-1">A simple checklist for your next property step.</p>
      <div ref={box} className="relative flex-1 mt-6">
        <div className="grid grid-cols-7 gap-2 font-data text-xs">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} data-day={i} className="aspect-square grid place-items-center rounded-xl border border-black/10 transition-colors"
              style={active === i ? { background: "var(--gold)", color: "var(--obsidian)" } : { background: "white" }}>{d}</div>
          ))}
        </div>
        <div ref={save} className="mt-6 w-fit rounded-full px-5 py-2 text-sm font-semibold" style={{ background: "var(--obsidian)", color: "var(--ivory)" }}>Verify details</div>
        <svg ref={cur} className="absolute top-0 left-0 pointer-events-none" width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l16 9-7 2-3 7z" fill="var(--obsidian)" stroke="white" strokeWidth="1.5" /></svg>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
      <h2 className="font-bold text-3xl md:text-5xl text-[var(--obsidian)] max-w-2xl">Built for people ready to make a <span className="font-drama" style={{ color: "var(--gold)" }}>move</span></h2>
      <div className="grid md:grid-cols-3 gap-6 mt-12"><Shuffler /><Typewriter /><Scheduler /></div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".par", { yPercent: 15, ease: "none", scrollTrigger: { trigger: ref.current, scrub: true, start: "top bottom", end: "bottom top" } });
      gsap.from(".w", { y: 30, opacity: 0, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ref.current, start: "top 60%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  const words = (s, cls = "") => s.split(" ").map((w, i) => <span key={i} className={`w inline-block mr-[.3em] ${cls}`}>{w}</span>);
  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-48 px-6 md:px-16" style={{ background: "var(--obsidian)", color: "var(--ivory)" }}>
      <img src={U(IMG.texture, 1800)} alt="" className="par absolute inset-0 w-full h-[130%] -top-[15%] object-cover opacity-20" />
      <div className="relative max-w-5xl mx-auto">
        <p className="text-base md:text-xl opacity-60 max-w-xl">{words("Property research can be clouded by outdated projects, unclear claims and missing sources.")}</p>
        <p className="font-drama text-4xl md:text-8xl leading-tight mt-8">{words("We focus on:")} <span style={{ color: "var(--gold)" }}>{words("company sources, Ghana projects, clearer next steps.")}</span></p>
      </div>
    </section>
  );
}

function Protocol() {
  const ref = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".pcard");
      cards.forEach((c, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({ trigger: c, start: "top top", end: "+=100%", pin: true, pinSpacing: false });
        gsap.to(c, { scale: 0.9, filter: "blur(20px)", opacity: 0.5, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top top", scrub: true } });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  const steps = [
    ["Discover", "Search Ghana's developer directory by company, project or location.", <svg key="a" viewBox="0 0 200 200" className="spin-slow w-64 h-64">{[90, 70, 50, 30].map((r) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="4 6" />)}<line x1="10" y1="100" x2="190" y2="100" stroke="var(--gold)" /></svg>],
    ["Research", "Open company sources and confirm project details, location and current availability.", <svg key="b" viewBox="0 0 240 280" className="w-64 h-64 overflow-hidden"><g fill="var(--gold)" opacity=".5">{Array.from({ length: 80 }, (_, i) => <circle key={i} cx={20 + (i % 10) * 22} cy={20 + Math.floor(i / 10) * 30} r="2" />)}</g><rect className="scan" x="0" y="10" width="240" height="2" fill="var(--gold)" /></svg>],
    ["Confirm", "Contact the company and seek independent land-title and legal advice before payment.", <svg key="c" viewBox="0 0 300 100" className="w-80 h-32"><path className="ekg" d="M0 50 L60 50 L75 20 L95 80 L110 50 L180 50 L195 30 L210 70 L225 50 L300 50" fill="none" stroke="var(--gold)" strokeWidth="2" /></svg>],
  ];
  return (
    <section id="process" ref={ref}>
      {steps.map(([t, d, art], i) => (
        <div key={t} className="pcard h-screen w-full grid md:grid-cols-2 items-center gap-8 px-6 md:px-20 rounded-t-[3rem]" style={{ background: i % 2 ? "var(--slate)" : "var(--obsidian)", color: "var(--ivory)" }}>
          <div>
            <p className="font-data text-sm" style={{ color: "var(--gold)" }}>Step {i + 1}</p>
            <h3 className="font-bold text-4xl md:text-6xl mt-2">{t}</h3>
            <p className="mt-4 max-w-sm opacity-75">{d}</p>
          </div>
          <div className="grid place-items-center">{art}</div>
        </div>
      ))}
    </section>
  );
}

function DueDiligence() {
  return (
    <section id="due-diligence" className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
      <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>A directory, not an endorsement</p>
      <h2 className="mt-3 font-bold text-3xl md:text-5xl text-[var(--obsidian)]">Do your checks <span className="font-drama" style={{ color: "var(--gold)" }}>before you buy</span></h2>
      <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7 md:p-10">
        <ul className="space-y-4 text-sm leading-relaxed md:text-base">
          <li className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />Confirm the developer's identity, project address, ownership and current availability directly with the company.</li>
          <li className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />Have an independent Ghanaian property lawyer verify land title, permits, contracts and payment terms before paying.</li>
          <li className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />A company website or social profile is a source for its claims, not proof of legal registration, title or investment safety.</li>
        </ul>
        <div className="mt-8"><Btn href="#listings">Search the directory</Btn></div>
      </div>
    </section>
  );
}

function Advertise() {
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const packages = [
    {
      name: "Basic",
      price: "GH₵ 250–500",
      description: "A clear introduction for one property or hospitality listing.",
      features: ["One property or hotel profile", "Up to 5 photos", "Location and enquiry details"],
    },
    {
      name: "Featured",
      price: "GH₵ 600–1,200",
      description: "More room to showcase a small collection and stand out.",
      features: ["Up to 5 properties or rooms", "Up to 15 photos per listing", "Featured placement in directory"],
      featured: true,
    },
    {
      name: "Premium",
      price: "GH₵ 1,500–3,000",
      description: "A high-visibility showcase for larger properties and businesses.",
      features: ["Up to 15 properties or room types", "Up to 25 photos per listing", "Homepage and directory feature"],
    },
  ];

  const sendEnquiry = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const businessType = form.get("businessType");
    const packageName = form.get("package");
    const details = form.get("details");
    const subject = `HomeGrid ${packageName} advertising enquiry`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business type: ${businessType}`,
      `Package of interest: ${packageName}`,
      "",
      "Property / showcase details:",
      details || "Not provided",
    ].join("\n");

    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="advertise" className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>For property & hospitality businesses</p>
        <h2 className="mt-3 font-bold text-3xl md:text-5xl text-[var(--obsidian)]">Put your space in the <span className="font-drama" style={{ color: "var(--gold)" }}>spotlight</span></h2>
        <p className="mt-4 text-sm leading-relaxed opacity-75">Reach people exploring property in Ghana. Choose a suggested monthly showcase range and send an enquiry for apartments, houses, hotels, serviced apartments, land and more.</p>
      </div>
      <p className="mt-8 rounded-2xl border border-[var(--gold)]/30 bg-white px-5 py-4 text-sm leading-relaxed">
        <strong>Suggested introductory rates (GH₵ per month).</strong> These are proposal ranges, not confirmed published tariffs. Final pricing, placement, availability and deliverables are agreed after enquiry.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {packages.map((item) => (
          <article key={item.name} className={`flex flex-col rounded-[2rem] border p-7 ${item.featured ? "border-[var(--gold)] ring-2 ring-[var(--gold)]/50 shadow-xl" : "border-black/10 bg-white"}`}
            style={item.featured ? { background: "var(--obsidian)", color: "var(--ivory)" } : {}}>
            {item.featured && <p className="font-data text-[10px] uppercase tracking-widest" style={{ color: "var(--gold)" }}>Most visibility</p>}
            <h3 className="mt-2 font-bold text-xl">{item.name}</h3>
            <p className="mt-4 font-data text-xl" style={{ color: item.featured ? "var(--gold)" : "#8a6f1f" }}>{item.price}<span className="text-xs opacity-70"> / month</span></p>
            <p className="mt-3 min-h-12 text-sm leading-relaxed opacity-75">{item.description}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {item.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={16} className="shrink-0" style={{ color: "var(--gold)" }} />{feature}</li>)}
            </ul>
            <a href="#enquiry-form" onClick={() => setSelectedPackage(item.name)} className="btn mt-7 justify-center" style={{ background: item.featured ? "var(--gold)" : "var(--obsidian)", color: item.featured ? "var(--obsidian)" : "var(--ivory)" }}>
              <span className="slide" style={{ background: item.featured ? "var(--ivory)" : "var(--gold)" }} />
              <span>Enquire about {item.name}</span>
            </a>
          </article>
        ))}
      </div>
      <div id="enquiry-form" className="mt-12 grid gap-10 rounded-[2rem] border border-black/10 bg-white p-7 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="font-bold text-2xl text-[var(--obsidian)]">Tell us what you want to showcase</h3>
          <p className="mt-3 text-sm leading-relaxed opacity-70">Apartments, hotels, serviced stays, houses, land or a full development—send a few details and we’ll get back to you.</p>
          <p className="mt-5 text-sm">Email: <a className="font-semibold underline decoration-[var(--gold)] underline-offset-4" href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a></p>
          <p className="mt-5 text-xs leading-relaxed opacity-60">Submitting opens your default email application with your enquiry prepared. Nothing is sent until you review and press Send there.</p>
        </div>
        <form onSubmit={sendEnquiry} className="space-y-4">
          <label className="block text-sm font-medium">Your name
            <input required name="name" autoComplete="name" className="mt-1.5 w-full rounded-xl border border-black/15 bg-[var(--ivory)] px-4 py-3 font-normal outline-none focus:border-[var(--gold)]" />
          </label>
          <label className="block text-sm font-medium">Email address
            <input required name="email" type="email" autoComplete="email" className="mt-1.5 w-full rounded-xl border border-black/15 bg-[var(--ivory)] px-4 py-3 font-normal outline-none focus:border-[var(--gold)]" />
          </label>
          <label className="block text-sm font-medium">What are you showcasing?
            <select required name="businessType" defaultValue="" className="mt-1.5 w-full rounded-xl border border-black/15 bg-[var(--ivory)] px-4 py-3 font-normal outline-none focus:border-[var(--gold)]">
              <option value="" disabled>Select a category</option>
              <option>Apartment or house</option>
              <option>Hotel or serviced apartment</option>
              <option>Land or development</option>
              <option>Other property business</option>
            </select>
          </label>
          <label className="block text-sm font-medium">Package of interest
            <select name="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)} className="mt-1.5 w-full rounded-xl border border-black/15 bg-[var(--ivory)] px-4 py-3 font-normal outline-none focus:border-[var(--gold)]">
              {packages.map((item) => <option key={item.name}>{item.name}</option>)}
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="block text-sm font-medium">Property and showcase details
            <textarea name="details" rows="4" placeholder="Location, number of properties or rooms, and what you want to promote" className="mt-1.5 w-full resize-y rounded-xl border border-black/15 bg-[var(--ivory)] px-4 py-3 font-normal outline-none focus:border-[var(--gold)]" />
          </label>
          <button type="submit" className="btn w-full justify-center" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
            <span className="slide" style={{ background: "var(--ivory)" }} />
            <span>Prepare my enquiry</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rounded-t-[4rem] px-6 md:px-16 pt-16 pb-10" style={{ background: "var(--obsidian)", color: "var(--ivory)" }}>
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <div className="md:col-span-2"><p className="font-bold text-2xl">HomeGrid</p><p className="opacity-60 mt-2 max-w-xs text-sm">A source-linked guide to real-estate developers and projects in Ghana. Not a property listing or legal advice service.</p></div>
        <div className="text-sm space-y-2"><p className="font-semibold">Explore</p>{[["Developers", "#listings"], ["Buying guide", "#process"], ["Due diligence", "#due-diligence"], ["Advertise with us", "#advertise"]].map(([label, href]) => <a key={label} href={href} className="block opacity-60 hover:opacity-100">{label}</a>)}</div>
        <div className="text-sm space-y-2"><p className="font-semibold">Legal</p>{["Terms", "Privacy"].map((x) => <a key={x} href="#" className="block opacity-60 hover:opacity-100">{x}</a>)}</div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 flex items-center gap-2 font-data text-xs opacity-80">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />System operational
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar /><Hero /><Listings /><Features /><Philosophy /><Protocol /><DueDiligence /><Advertise /><Footer />
    </>
  );
}
