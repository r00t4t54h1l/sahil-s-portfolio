export function Avatar() {
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center">
      <div className="glow-pulse absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.55)_0%,rgba(17,7,32,0)_70%)] blur-2xl" />
      <svg
        viewBox="0 0 300 300"
        width="300"
        height="300"
        className="relative z-10"
        role="img"
        aria-label="Illustrated portrait of Sahil"
      >
        <defs>
          <radialGradient id="skin" cx="45%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#e8b48a" />
            <stop offset="100%" stopColor="#c9895a" />
          </radialGradient>
          <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b1a14" />
            <stop offset="100%" stopColor="#1a100c" />
          </linearGradient>
          <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2150" />
            <stop offset="100%" stopColor="#15102c" />
          </linearGradient>
        </defs>
        <ellipse cx="150" cy="268" rx="78" ry="22" fill="#7c3aed" opacity="0.18" />
        <path
          d="M78 268c10-46 28-78 72-78s62 32 72 78"
          fill="url(#shirt)"
        />
        <path
          d="M108 214c10 18 24 28 42 28s32-10 42-28c-14 10-28 14-42 14s-28-4-42-14z"
          fill="#1b1438"
        />
        <circle cx="150" cy="132" r="62" fill="url(#skin)" />
        <path
          d="M92 128c4-48 28-74 58-74 32 0 56 24 60 72 8 2 16 12 10 22-10-18-24-28-36-32-8 18-22 28-34 28s-26-10-34-28c-12 4-26 14-36 32-6-10 2-20 12-20z"
          fill="url(#hair)"
        />
        <path
          d="M118 108c8-4 16-6 22-4"
          stroke="#1a100c"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M160 104c8-2 16 0 24 4"
          stroke="#1a100c"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="128" cy="136" rx="7" ry="8" fill="#2a1a12" />
        <ellipse cx="172" cy="136" rx="7" ry="8" fill="#2a1a12" />
        <circle cx="130" cy="134" r="2" fill="#fff" />
        <circle cx="174" cy="134" r="2" fill="#fff" />
        <path
          d="M140 164c6 8 14 8 20 0"
          stroke="#a86b45"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="118" cy="150" rx="10" ry="6" fill="#d48b66" opacity="0.35" />
        <ellipse cx="182" cy="150" rx="10" ry="6" fill="#d48b66" opacity="0.35" />
      </svg>
    </div>
  );
}
