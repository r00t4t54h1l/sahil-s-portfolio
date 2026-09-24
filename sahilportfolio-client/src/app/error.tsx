"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#110720] px-6 text-center text-white">
      <h1 className="text-4xl font-bold">Something broke</h1>
      <p className="mt-3 max-w-md text-white/70">
        Refresh, or go back home. The rest of the site is still there.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-purple-500 px-5 py-2 text-sm font-medium text-white hover:bg-purple-400"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-purple-400"
        >
          Home
        </a>
      </div>
    </main>
  );
}
