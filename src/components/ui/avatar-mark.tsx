type AvatarMarkProps = {
  className?: string;
  compact?: boolean;
};

export const AvatarMark = ({ className = "", compact = false }: AvatarMarkProps) => (
  <div
    role="img"
    aria-label="Abstract William Theodorus avatar"
    className={`relative isolate overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] ${className}`}
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(180deg,var(--accent-soft),transparent)]"
    />
    <div className="relative flex h-full w-full items-center justify-center p-3">
      <div
        className={`flex items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] font-heading font-semibold text-[var(--foreground)] shadow-sm ${
          compact ? "h-7 w-7 text-[10px]" : "h-32 w-32 text-5xl sm:h-40 sm:w-40 sm:text-6xl"
        }`}
      >
        WT
      </div>
    </div>
    {!compact && (
      <>
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-6 h-12 w-12 rounded-lg border border-[var(--line)] bg-[var(--surface-raised)]"
        />
        <div
          aria-hidden="true"
          className="absolute right-6 top-6 h-16 w-10 rounded-lg border border-[var(--line)] bg-[var(--surface-raised)]"
        />
      </>
    )}
  </div>
);
