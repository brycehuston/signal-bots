// components/ui.tsx
import Link from "next/link";
import type { ReactNode } from "react";

/* --------------------------- Card primitives --------------------------- */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        // structure
        "rounded-2xl border bg-card/85 backdrop-blur",
        // visual: subtle gradient & ring on hover
        "border-edge shadow-glow",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]",
        "transition-all duration-200 hover:-translate-y-[1.5px] hover:shadow-[0_0_0_1px_rgba(110,231,255,.18),0_20px_60px_rgba(2,6,23,.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight">{children}</h2>;
}

/* ------------------------------ Button -------------------------------- */
type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  disabled?: boolean;
  full?: boolean;
};

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  full,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full tracking-tight whitespace-nowrap " +
    "font-medium leading-none transition-colors focus:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-offset-0";

  const sizes =
    size === "lg" ? "h-11 px-5 text-[15px]" : "h-10 px-4 text-sm";

  let styles = "";
  if (variant === "primary") {
    styles =
      "bg-brand-600 text-black hover:bg-white hover:text-black focus-visible:ring-brand-600/40";
  } else if (variant === "outline") {
    styles =
      "border border-white/15 text-white hover:bg-white hover:text-black focus-visible:ring-white/25";
  } else {
    styles =
      "bg-white/[0.06] text-white hover:bg-white hover:text-black focus-visible:ring-white/20";
  }

  const width = full ? "w-full" : "";

  const classes = [base, sizes, styles, width, "disabled:opacity-60", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

/* ----------------------------- Section -------------------------------- */
export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardBody>
        <div className="mb-5">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-1 text-white/60">{subtitle}</p>}
        </div>
        {children}
      </CardBody>
    </Card>
  );
}
