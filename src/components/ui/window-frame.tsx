import { ReactNode } from "react";

type WindowFrameProps = {
  children: ReactNode;
  subtitle?: string;
  title: string;
};

export const WindowFrame = ({ children, subtitle, title }: WindowFrameProps) => (
  <section className="os-window" aria-label={title}>
    <div className="os-window-titlebar">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="os-traffic bg-[#ff5f57]" />
        <span className="os-traffic bg-[#febc2e]" />
        <span className="os-traffic bg-[var(--accent)]" />
      </div>
      <div className="min-w-0 text-center">
        <p className="truncate text-xs font-semibold text-[var(--foreground)]">
          {title}
        </p>
        {subtitle && (
          <p className="truncate text-[10px] text-[var(--muted)]">{subtitle}</p>
        )}
      </div>
      <div className="hidden items-center gap-1 sm:flex" aria-hidden="true">
        <span className="h-1.5 w-8 rounded-full bg-[var(--line-strong)]" />
        <span className="h-1.5 w-4 rounded-full bg-[var(--line-strong)]" />
      </div>
    </div>
    <div className="os-window-content">{children}</div>
  </section>
);
