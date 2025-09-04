// app/pay/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PLANS, BUNDLE } from "@/lib/plans";

function getPlan(slug: string) {
  const all = [...PLANS, BUNDLE];
  return all.find((p) => p.slug === slug);
}

export default function PayPage({ params, searchParams }: { params: { slug: string }; searchParams: { period?: string } }) {
  const plan = getPlan(params.slug);
  if (!plan) return notFound();

  const period = (searchParams.period === "annual" ? "annual" : "monthly") as "monthly" | "annual";
  const amount = period === "annual" ? plan.priceAnnual : plan.priceMonthly;

  const address = process.env.NEXT_PUBLIC_SOL_USDC_ADDRESS || "YOUR_SOLANA_USDC_ADDRESS";
  const network = "Solana";
  const token = "USDC";

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <div className="text-sm text-white/60">Plan</div>
        <h1 className="text-2xl font-semibold mt-1 flex items-center gap-2">
          <span className="text-xl">{plan.emoji}</span> {plan.title} — {period === "annual" ? "Annual" : "Monthly"}
        </h1>
        <div className="mt-1 text-white/70">Amount due: <b>${amount}</b> in {token} on {network}.</div>
      </div>

      <div className="rounded-2xl border border-edge bg-card/80 p-6 shadow-glow">
        <h2 className="text-lg font-semibold">How to pay</h2>
        <ol className="mt-3 space-y-2 text-white/80 text-sm">
          <li>1) Send <b>{amount} {token}</b> on <b>{network}</b> to the address below.</li>
          <li>2) Paste your transaction link or signature.</li>
          <li>3) We’ll verify and DM you the private Telegram group invite.</li>
        </ol>

        <div className="mt-5">
          <div className="text-sm text-white/60 mb-1">Payment address (USDC on Solana)</div>
          <div className="rounded-xl border border-edge/70 bg-white/5 p-3 break-all">
            {address}
          </div>
        </div>

        <form
          className="mt-5 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Submit captured. (Wire this up to your backend to save/notify.)");
          }}
        >
          <label className="text-sm text-white/70">
            Transaction link or signature
            <input
              required
              name="tx"
              placeholder="https://solscan.io/tx/…  or  5w3…txSig"
              className="mt-1 w-full rounded-xl border border-edge/70 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600"
            />
          </label>

          <label className="text-sm text-white/70">
            Your Telegram @username
            <input
              required
              name="tg"
              placeholder="@yourhandle"
              className="mt-1 w-full rounded-xl border border-edge/70 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600"
            />
          </label>

          <button className="inline-flex h-10 items-center justify-center rounded-xl bg-brand-600 px-4 text-slate-900 font-semibold hover:bg-brand-500">
            Submit for verification
          </button>
        </form>
      </div>

      <div className="text-sm text-white/55">
        Need help? DM support on Telegram after you send: <b>@your_support_name</b>.
      </div>
    </div>
  );
}
