import { skills } from "@/data/site";

function orbitPoint(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export function Skills() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-6xl text-2xl">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400">cross-functional team</span>
            <br />
            <span className="text-sm">
              that values shipping hardware-aware software people can actually
              use
            </span>
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[640px]">
          <div className="absolute inset-[8%] rounded-full border border-white/10" />
          <div className="absolute inset-[20%] rounded-full border border-white/10" />
          {skills.map((label, index) => {
            const ring = index < 6 ? 42 : 28;
            const slot = index < 6 ? index : index - 6;
            const total = index < 6 ? Math.min(skills.length, 6) : skills.length - 6;
            const point = orbitPoint(slot, total, ring);
            return (
              <span
                key={label}
                className="absolute flex h-10 min-w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#1a0d2e] px-2.5 text-[10px] font-semibold whitespace-nowrap text-white/80"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                {label}
              </span>
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <div className="glow-pulse absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.55),transparent_70%)] blur-md" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#1b0d33] text-4xl font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.45)]">
                Σ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
