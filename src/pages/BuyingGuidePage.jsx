import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Define what you need",
    description: "Set your budget, preferred areas, property type and timeline before comparing projects. Include likely legal, inspection, utility and maintenance costs in your planning.",
  },
  {
    number: "02",
    title: "Shortlist and compare",
    description: "Use the directory to find developers and named projects. Compare location, property type and the details each company publishes, but treat directory information as a starting point rather than an endorsement.",
  },
  {
    number: "03",
    title: "Speak to the developer",
    description: "Contact the company using its official website or verified channel. Confirm the exact project address, what is available, the total price, payment schedule, completion status and what is included in writing.",
  },
  {
    number: "04",
    title: "Inspect and verify",
    description: "Visit the property or site where practical. Instruct an independent Ghanaian property lawyer to review ownership, title records, planning and building documentation, the sale agreement and any payment conditions.",
  },
  {
    number: "05",
    title: "Decide with clear records",
    description: "Do not rely on verbal assurances. Keep copies of source documents, written answers, receipts and the final agreement. Make payments only through the process independently confirmed with your lawyer and the company.",
  },
];

export default function BuyingGuidePage() {
  return (
    <main className="px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 md:px-16">
      <header className="mx-auto max-w-5xl">
        <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>A practical starting point</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-[var(--obsidian)] min-[360px]:text-4xl md:text-7xl">
          A clearer path to your <span className="font-drama" style={{ color: "var(--gold)" }}>next property</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
          Move from exploring Ghanaian developers to asking the right questions and making independent checks before you commit.
        </p>
      </header>

      <section className="mx-auto mt-10 sm:mt-16 max-w-5xl" aria-label="Property buying steps">
        <div className="space-y-4">
          {steps.map((step) => (
            <article key={step.number} className="grid gap-3 sm:gap-5 rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 bg-white p-5 sm:p-6 md:grid-cols-[5rem_1fr] md:gap-8 md:p-9">
              <span className="font-data text-sm" style={{ color: "#8a6f1f" }}>{step.number}</span>
              <div>
                <h2 className="text-2xl font-bold text-[var(--obsidian)]">{step.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-75 md:text-base">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="mx-auto mt-7 sm:mt-10 max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 md:p-10" style={{ background: "var(--obsidian)", color: "var(--ivory)" }}>
        <div className="flex gap-4">
          <Check className="mt-1 shrink-0" style={{ color: "var(--gold)" }} />
          <div>
            <h2 className="text-xl font-bold">Keep your checks independent</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed opacity-75">
              HomeGrid is a source-linked directory, not a broker, legal adviser or verification service. Project availability and company information can change;
               verify current details directly and get independent professional advice.
            </p>
          </div>
        </div>
      </aside>

      <div className="mx-auto mt-7 sm:mt-10 flex max-w-5xl flex-wrap gap-3 sm:gap-4">
        <Link to="/developers" className="btn" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
          <span className="slide" style={{ background: "var(--ivory)" }} />
          <span>Explore developers</span>
          <ArrowRight size={16} />
        </Link>
        <Link to="/due-diligence" className="btn border border-black/15" style={{ color: "var(--obsidian)" }}>
          Read the due diligence checklist
        </Link>
      </div>
    </main>
  );
}
