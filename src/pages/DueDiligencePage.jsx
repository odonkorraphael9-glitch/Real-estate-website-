import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const checks = [
  {
    title: "Confirm who you are dealing with",
    detail: "Check the company identity and contact details independently. The Office of the Registrar of Companies can provide information about registered entities, but a company profile alone does not prove that it owns a particular property.",
  },
  {
    title: "Verify the land and ownership",
    detail: "Ask an independent Ghanaian property lawyer to conduct appropriate searches with the Lands Commission and review the root of title, site plan, boundaries, encumbrances and any competing interests.",
  },
  {
    title: "Check permissions and project status",
    detail: "Request relevant planning, building and project documents from the developer and verify them with the responsible authorities. Visit the site where possible and establish whether the property is completed, under construction or proposed.",
  },
  {
    title: "Read the agreement before paying",
    detail: "Have your own lawyer review the sale or lease agreement, payment schedule, refund and default terms, completion obligations, handover conditions and any promised services or facilities.",
  },
  {
    title: "Use traceable, documented payments",
    detail: "Confirm payment instructions using a separately verified company contact. Pay only to the account and recipient confirmed in the reviewed agreement, and keep receipts and written records.",
  },
  {
    title: "Reconfirm details close to purchase",
    detail: "Availability, price, project status and company contacts can change. Reconfirm each material detail directly before signing or transferring funds.",
  },
];

export default function DueDiligencePage() {
  return (
    <main className="px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 md:px-16">
      <header className="mx-auto max-w-5xl">
        <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>Independent checks matter</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-[var(--obsidian)] min-[360px]:text-4xl md:text-7xl">
          Look beyond the <span className="font-drama" style={{ color: "var(--gold)" }}>listing</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
          Use these prompts to guide your own research with qualified professionals. They are not legal advice and do not replace searches or document review for a specific property.
        </p>
      </header>

      <section className="mx-auto mt-10 sm:mt-14 max-w-5xl" aria-label="Property due diligence checklist">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {checks.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 bg-white p-5 sm:p-7 md:p-8">
              <Check size={20} className="mb-5" style={{ color: "#8a6f1f" }} />
              <h2 className="text-xl font-bold text-[var(--obsidian)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="mx-auto mt-6 sm:mt-8 max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] border border-black/10 p-5 sm:p-7 md:p-9">
        <h2 className="text-lg font-bold text-[var(--obsidian)]">Official starting points</h2>
        <p className="mt-2 text-sm leading-relaxed opacity-75">
          For property-specific verification, ask your lawyer which records and authorities are relevant to your transaction. You can also begin with the official{" "}
          <a className="font-semibold underline decoration-[var(--gold)] underline-offset-4" href="https://www.lc.gov.gh/" target="_blank" rel="noopener noreferrer">Lands Commission</a>
          {" "}and{" "}
          <a className="font-semibold underline decoration-[var(--gold)] underline-offset-4" href="https://orc.gov.gh/" target="_blank" rel="noopener noreferrer">Office of the Registrar of Companies</a>.
        </p>
      </aside>

      <div className="mx-auto mt-7 sm:mt-10 max-w-5xl">
        <Link to="/developers" className="btn" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
          <span className="slide" style={{ background: "var(--ivory)" }} />
          <span>Browse the developer directory</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
