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
    </div>
  );
}
