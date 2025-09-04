"use client";

import { PLANS, BUNDLE } from "@/lib/plans";
import { Card, CardBody, Button } from "@/components/ui";

/* simple check icon for features */
function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-[18px] w-[18px] -mt-[1px] flex-none text-brand-600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 10.5l2 2 4.5-5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  const brand = process.env.NEXT_PUBLIC_BRAND ?? "Crypto Signal Scanner";

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">
        {brand} — <span className="opacity-70">Pricing</span>
      </h1>
      <p className="mt-2 text-white/70">
        Subscribe to a single bot or grab the bundle. Payments are manual for now via USDC on
        Solana.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((p) => (
          <Card key={p.slug}>
            <CardBody className="space-y-5">
              {/* header */}
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06]">
                  <span className="text-[18px]">{p.emoji}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              </div>

              {/* price stack */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <div className="text-[32px] font-semibold leading-none">${p.priceMonthly}</div>
                  <div className="text-white/55 text-sm">/ month</div>
                </div>
                <div className="text-white/50 text-sm">or ${p.priceAnnual} / year</div>
              </div>

              {/* features */}
              <ul className="space-y-2.5 text-[15px] text-white/85">
                {p.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex gap-2.5">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  full
                  href={`/pay/${p.slug}?period=monthly`}
                >
                  Choose monthly
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  full
                  href={`/pay/${p.slug}?period=annual`}
                >
                  Choose annual
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}

        {/* Bundle */}
        <Card className="border-brand-600/40">
          <CardBody className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-600/15 text-brand-600">
                <span className="text-[18px]">{BUNDLE.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{BUNDLE.title}</h3>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <div className="text-[32px] font-semibold leading-none">
                  ${BUNDLE.priceMonthly}
                </div>
                <div className="text-white/55 text-sm">/ month</div>
              </div>
              <div className="text-white/50 text-sm">or ${BUNDLE.priceAnnual} / year</div>
            </div>

            <ul className="space-y-2.5 text-[15px] text-white/85">
              {BUNDLE.bullets.map((b: string, i: number) => (
                <li key={i} className="flex gap-2.5">
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Button
                variant="primary"
                size="lg"
                full
                href={`/pay/${BUNDLE.slug}?period=monthly`}
              >
                Bundle monthly
              </Button>
              <Button
                variant="outline"
                size="lg"
                full
                href={`/pay/${BUNDLE.slug}?period=annual`}
              >
                Bundle annual
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

{/* Alpha Bot Tile */}
<div className="mt-12">
  <Card className="relative overflow-hidden border border-amber-400/40 shadow-[0_0_80px_rgba(251,191,36,0.08)]">
    <CardBody className="space-y-6 text-center">
      {/* spark icon */}
      <svg
        viewBox="0 0 24 24"
        className="mx-auto h-8 w-8 text-amber-300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.12"
        />
      </svg>

      {/* headline + subline */}
      <div>
  <h2
    className="text-5xl font-extrabold tracking-tight 
           rounded-lg px-4 py-2 
           bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 
           bg-clip-text text-transparent 
           bg-black"
  >
    ALPHA BOT
  </h2>
        <p className=" text-white text-md tracking-wide mt-1">(Coming Soon)</p>
      </div>

      {/* description */}
      <p className="mx-auto max-w-2xl text-white/85">
        A hands-free auto-trader that hunts high-probability setups, sizes risk,
        and manages exits for you—while you do anything else.
      </p>

      {/* compact feature list */}
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/80">
        <span className="inline-block">Auto entries + SL/TP</span>
        <span className="opacity-30">•</span>
        <span className="inline-block">Strict EMA / RSI / Volume / Trend</span>
        <span className="opacity-30">•</span>
        <span className="inline-block">Breakeven &amp; trailing stops</span>
        <span className="opacity-30">•</span>
        <span className="inline-block">24/7 Telegram alerts</span>
      </div>

      {/* centered button (only as wide as content) */}
      <div className="flex justify-center">
        <Button
          size="lg"
          href="/waitlist"
          className="bg-amber-400 hover:bg-amber-300 text-black font-semibold shadow-lg shadow-amber-500/30 px-8"
        >
          Join Waitlist
        </Button>
      </div>
    </CardBody>
  </Card>
</div>

    </div>
  );
}
