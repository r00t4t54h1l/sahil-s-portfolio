import { site } from "@/data/site";
import { Avatar } from "@/components/Avatar";
import { Typewriter } from "@/components/Typewriter";

function ArrowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      width="100"
      height="80"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M12 18c18 2 34 18 40 34"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M44 40c6 8 10 14 12 22l12-10"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoverCircle() {
  return (
    <svg
      viewBox="0 0 220 90"
      width="220"
      height="90"
      className="pointer-events-none absolute -top-2 -left-6 mt-2 h-[90px] w-[220px]"
      aria-hidden
    >
      <ellipse
        cx="110"
        cy="48"
        rx="98"
        ry="34"
        stroke="#8b5cf6"
        strokeWidth="3"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative flex w-full justify-center lg:w-auto lg:justify-end">
            <div className="relative top-10">
              <div className="relative z-10 mb-2 lg:hidden">
                <div className="relative inline-block">
                  <ArrowMark className="absolute top-5 -left-16 rotate-[200deg]" />
                  <p className="whitespace-nowrap text-lg text-white">
                    Hello! I Am <span className="text-purple-400">{site.name}</span>
                  </p>
                </div>
              </div>
              <Avatar />
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="relative hidden lg:inline-block">
              <ArrowMark className="absolute -top-[50px] -left-[100px]" />
              <div className="relative bottom-10">
                <p className="text-lg text-white">
                  Hello! I Am <span className="text-purple-400">{site.name}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-2xl">An engineer who</p>
              <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Judges a book
                <br /> by its{" "}
                <span className="relative inline-block">
                  <CoverCircle />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    cover
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-15 text-center lg:text-left">
          <Typewriter />
          <p className="flex flex-wrap items-center justify-center gap-2 text-lg tracking-wide text-white/90 lg:justify-start lg:text-xl">
            <span>Currently, I&apos;m a {site.year} ECE student at</span>
            <span className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[10px] font-bold">
                N
              </span>
              <span className="font-semibold text-blue-400">{site.college},</span>
            </span>
          </p>
          <p className="mx-auto mt-15 max-w-2xl text-lg text-white/80 lg:mx-0">
            I started my B.Tech in Electronics &amp; Communication in 2023. I
            work with C++, FastAPI, React, TypeScript, JavaScript, Python,
            TCP/IP, TCP/UDP, HTTP/HTTPS, and SQL. I also volunteer with DEFCON
            Srinagar at NIT, and I shipped
            Quill plus this portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
