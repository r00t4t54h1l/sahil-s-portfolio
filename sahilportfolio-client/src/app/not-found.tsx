export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#110720] px-6 text-center text-white">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-white/70">That route is not on this portfolio.</p>
      <a
        href="/"
        className="mt-8 rounded-full bg-purple-500 px-5 py-2 text-sm font-medium text-white hover:bg-purple-400"
      >
        Back home
      </a>
    </main>
  );
}
