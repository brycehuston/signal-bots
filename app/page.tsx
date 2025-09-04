import HeroChart from "@/components/HeroChart";

export default function Page() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Trade faster with{" "}
            <span className="text-brand-500">Crypto Signal Scanner</span>
          </h1>
          <p className="text-white/70 mb-6">
            Real-time scans, smart filters, and pro alerts. Launch a bot in
            seconds.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/70">
            <li>Ultra-low latency alerts</li>
            <li>100+ crypto pairs tracked</li>
            <li>Signals across multiple bots & strategies</li>
            <li>Reliable uptime with auto-failover</li>
          </ul>
        </div>

        {/* chart preview (client wrapper) */}
        <HeroChart />
      </section>

      {/* 3 big picture tiles */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl mb-2 font-semibold">Smart filters</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Cut through noise with volatility, liquidity, and timeframe
            filters. Prevent false alerts and surface only high-quality setups.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-xl mb-2 font-semibold">Pro alerts</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Alerts delivered straight to Telegram — or webhooks for advanced
            routing. Snooze, batch, or route signals the way you want.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-xl mb-2 font-semibold">Visualize trends</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Momentum, divergence, and liquidation heatmaps — visual context so
            you know exactly why the alert fired, and where price might head.
          </p>
        </div>
      </section>
    </div>
  );
}
