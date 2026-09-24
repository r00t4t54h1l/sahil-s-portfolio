import { workExperience, type WorkRole } from "@/data/site";

const icons = {
  briefcase: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#3b0764" />
      <rect
        x="16"
        y="26"
        width="32"
        height="22"
        rx="4"
        fill="none"
        stroke="#c084fc"
        strokeWidth="3"
      />
      <path
        d="M26 26v-4a6 6 0 0 1 12 0v4"
        fill="none"
        stroke="#e9d5ff"
        strokeWidth="3"
      />
      <path d="M16 36h32" stroke="#c084fc" strokeWidth="3" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden>
      <rect width="64" height="64" rx="18" fill="#082f49" />
      <path
        d="M20 48V20h24v28"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="3"
      />
      <path d="M16 48h32" stroke="#7dd3fc" strokeWidth="3" />
      <path d="M26 28h4M34 28h4M26 36h4M34 36h4" stroke="#7dd3fc" strokeWidth="3" />
    </svg>
  ),
};

function RoleCard({ item }: { item: WorkRole }) {
  return (
    <article className="flex items-center gap-4 rounded-xl border-t-3 border-purple-700 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-6 backdrop-blur-sm transition hover:shadow-2xl hover:shadow-purple-900">
      <div className="mb-4 shrink-0">{icons[item.icon]}</div>
      <div>
        <p className="mb-1 text-sm text-purple-300">{item.role}</p>
        <h3 className="mb-1 text-xl font-semibold text-white">{item.company}</h3>
        <p className="mb-3 text-xs text-white/50">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mb-4 text-sm text-white/70">{item.description}</p>
        {item.href ? (
          <a
            href={item.href}
            className="inline-block text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
          >
            SEE MORE →
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function WorkExperience() {
  const roles = workExperience;

  return (
    <section id="work" className="scroll-mt-24 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white lg:text-5xl">
          Work Experience
        </h2>

        {roles.length === 0 ? (
          <p className="mt-6 text-center text-lg tracking-wide text-purple-300">
            coming soon
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {roles.map((item) => (
              <RoleCard key={`${item.company}-${item.period}`} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
