import { projects } from "@/data/site";

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function QuillMockup() {
  const posts = [
    ["The quiet stack", "Aarav · 8 min", "124", "18"],
    ["Why I bookmark in public", "Meera · 5 min", "86", "9"],
    ["Notes from a Srinagar winter", "Kabir · 12 min", "201", "31"],
  ];

  return (
    <div className="flex h-full bg-[#0c0814] text-white">
      <aside className="hidden w-[132px] flex-col gap-4 border-r border-white/10 px-3 py-4 text-[11px] text-white/55 sm:flex">
        <p className="px-2 text-sm font-semibold text-white">Quill</p>
        {["Home", "Following", "Library", "Write"].map((item, i) => (
          <span
            key={item}
            className={`rounded-lg px-2 py-1.5 ${
              i === 0 ? "bg-white/10 text-white" : ""
            }`}
          >
            {item}
          </span>
        ))}
        <div className="mt-auto rounded-lg border border-white/10 px-2 py-2">
          <p className="text-white/80">Signed in</p>
          <p className="text-[10px] text-white/40">sahil@quill</p>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs">
          <span className="font-medium">Today&apos;s feed</span>
          <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-violet-200">
            Auth on
          </span>
        </div>
        <div className="grid flex-1 grid-cols-5 gap-3 overflow-hidden p-3">
          <div className="col-span-3 space-y-2">
            {posts.map(([title, meta, likes, comments]) => (
              <article
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
              >
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-0.5 text-[10px] text-white/45">{meta}</p>
                <div className="mt-2 flex gap-3 text-[10px] text-white/60">
                  <span>♥ {likes}</span>
                  <span>💬 {comments}</span>
                  <span>Follow</span>
                </div>
              </article>
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="rounded-xl border border-white/10 bg-[#171027] p-3">
              <p className="text-[10px] tracking-wide text-purple-300 uppercase">
                Your library
              </p>
              <p className="mt-1 text-sm font-semibold">Evening reads</p>
              <p className="mt-1 text-[10px] text-white/50">
                12 bookmarked blogs
              </p>
              <span className="mt-2 inline-block rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">
                Public
              </span>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#171027] p-3">
              <p className="text-sm font-semibold">Drafts only</p>
              <p className="mt-1 text-[10px] text-white/50">
                4 saved pieces, not shared
              </p>
              <span className="mt-2 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                Private
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="flex h-full flex-col bg-[#110720] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-xs text-white/60">
        <span className="font-script text-lg leading-none text-white">Sahil</span>
        <div className="flex gap-4">
          <span>Home</span>
          <span>About</span>
          <span>Lab</span>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-4 px-6">
        <div className="hidden h-20 w-20 shrink-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.45),transparent_70%)] sm:block" />
        <div className="min-w-0">
          <p className="text-[11px] text-purple-300">Hello! I Am Sahil</p>
          <p className="mt-1 text-2xl leading-tight font-semibold">
            Judges a book by its{" "}
            <span className="text-violet-400">cover</span>
          </p>
          <p className="mt-2 text-[11px] text-white/55">
            4th-year ECE · NIT Srinagar · Quill + this site
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        <div className="rounded-lg border border-purple-700/60 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-3">
          <p className="text-xs font-semibold">Next.js · React</p>
          <p className="mt-1 text-[10px] text-white/55">app router, TypeScript</p>
        </div>
        <div className="rounded-lg border border-purple-700/60 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 p-3">
          <p className="text-xs font-semibold">Tailwind CSS</p>
          <p className="mt-1 text-[10px] text-white/55">
            Dark UI, responsive sections
          </p>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="lab" className="scroll-mt-24 px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        {projects.map((project, index) => {
          const reverse = index % 2 === 1;
          return (
            <article key={project.title} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={reverse ? "lg:col-start-2" : ""}>
                  <p className="mb-2 text-lg font-medium text-purple-400 lg:text-xl">
                    {project.label}
                  </p>
                  <h3 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                    {project.title}
                  </h3>
                  <div className="relative z-10 mb-6">
                    <div
                      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 shadow-lg backdrop-blur-md lg:p-8 ${
                        reverse ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-base leading-relaxed text-white/90 lg:text-lg">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.href}
                      className="text-white transition-colors duration-200 hover:text-purple-400"
                      aria-label="Visit project website"
                    >
                      <GlobeIcon />
                    </a>
                  </div>
                </div>
                <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950 p-2 shadow-2xl lg:p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      {project.mockup === "quill" ? (
                        <QuillMockup />
                      ) : (
                        <PortfolioMockup />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
