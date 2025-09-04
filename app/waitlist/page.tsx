// app/waitlist/page.tsx
"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send to your API / Zapier / Airtable / MailerLite, etc.
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-lg px-5 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Join the Alpha Bot Waitlist</h1>
      <p className="mt-2 text-white/70">
        Be the first to try hands-free trading with strict risk controls and real-time alerts.
      </p>

      <form onSubmit={submit} className="mt-6 space-y-3">
        <input
          type="email"
          required
          placeholder="your@email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-edge bg-black/30 px-4 py-3 outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-xl bg-brand-600 px-5 text-sm font-medium text-black hover:bg-brand-500"
        >
          Join Waitlist
        </button>
      </form>

      {sent && (
        <div className="mt-4 rounded-xl border border-edge bg-white/5 p-4 text-sm text-white/80">
          Thanks! You’re on the list — we’ll email you when Alpha Bot opens.
        </div>
      )}
    </div>
  );
}
