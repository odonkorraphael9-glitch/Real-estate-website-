import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[65vh] place-items-center px-5 pt-20 text-center sm:px-6 sm:pt-24">
      <div>
        <p className="font-data text-xs uppercase tracking-widest" style={{ color: "#8a6f1f" }}>404 · Page not found</p>
        <h1 className="mt-4 text-3xl font-bold text-[var(--obsidian)] min-[360px]:text-4xl md:text-6xl">This page isn’t on the map.</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed opacity-75">The address may have changed or the page may not exist.</p>
        <Link to="/" className="btn mt-8" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
          <span className="slide" style={{ background: "var(--ivory)" }} />
          <span>Back to HomeGrid</span>
        </Link>
      </div>
    </main>
  );
}
