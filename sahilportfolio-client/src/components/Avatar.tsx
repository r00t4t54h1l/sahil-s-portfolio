export function Avatar() {
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center">
      <div className="glow-pulse absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.55)_0%,rgba(17,7,32,0)_70%)] blur-2xl" />

      <div className="relative z-10 h-[250px] w-[250px] overflow-hidden rounded-full border border-white/10 shadow-2xl ring-1 ring-purple-400/20">
        <img
          src="/sahil-profile.jpg"
          alt="Sahil"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
