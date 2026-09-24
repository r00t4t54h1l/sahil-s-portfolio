import { highlights } from "@/data/site";

const icons = {
  defcon: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#3b0764" />
      <path
        d="M32 16 48 26v16L32 52 16 42V26z"
        fill="none"
        stroke="#c084fc"
        strokeWidth="3"
      />
      <circle cx="32" cy="32" r="5" fill="#e9d5ff" />
    </svg>
  ),
  academy: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#082f49" />
      <path d="M12 28 32 18l20 10-20 10L12 28z" fill="#38bdf8" />
      <path
        d="M22 34v8c4 4 16 4 20 0v-8"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="3"
      />
    </svg>
  ),
  rank: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#4a044e" />
      <path d="M32 16 36 28h12l-10 8 4 12-10-7-10 7 4-12-10-8h12z" fill="#e879f9" />
    </svg>
  ),
  quill: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#451a03" />
      <path
        d="M44 14c-10 4-20 20-24 30l-4 8 8-4c10-4 26-14 30-24-4-6-8-8-10-10z"
        fill="#fbbf24"
      />
      <path d="M20 48 16 52" stroke="#fde68a" strokeWidth="3" />
    </svg>
  ),
};

export function Experience() {
  return (
    <section id="highlights" className="scroll-mt-24 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white lg:text-5xl">
          Hours well spent
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex items-center gap-4 rounded-xl border-t-3 border-purple-700 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-6 backdrop-blur-sm transition hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="mb-4 shrink-0">{icons[item.icon]}</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-white/70">{item.description}</p>
                <a
                  href={item.href}
                  className="inline-block text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                >
                  SEE MORE →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
