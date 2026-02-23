import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2">
        Error 404
      </p>
      <h1 className="font-display text-5xl font-bold text-coffee-900 mb-3">
        Page not found
      </h1>
      <p className="text-coffee-600 mb-8 max-w-sm text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-4 rounded-full bg-accent text-coffee-950 font-semibold hover:bg-accent-light transition-colors shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
