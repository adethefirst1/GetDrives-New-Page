/**
 * Lightweight full-viewport placeholder shown while lazy route chunks load.
 */
export default function RouteFallback() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-bg"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-brand-orange"
        aria-hidden
      />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
