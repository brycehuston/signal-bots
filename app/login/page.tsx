"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, H2 } from "@/components/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      const base = process.env.NEXT_PUBLIC_API_BASE!;
      const form = new URLSearchParams();
      form.set("username", email);
      form.set("password", password);
      const res = await fetch(`${base}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form.toString(),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      const token = data.access_token || data.token;
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (e:any) {
      setErr(e.message ?? "Login failed");
    } finally { setBusy(false); }
  }

  return (
    <Card>
      <CardBody>
        <H2>Login</H2>
        <form onSubmit={handle} className="mt-4 grid gap-3 max-w-md">
          <input
            className="rounded-xl bg-white/5 border border-edge px-3 py-2 outline-none focus:border-brand-600"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <input
            className="rounded-xl bg-white/5 border border-edge px-3 py-2 outline-none focus:border-brand-600"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <div className="flex gap-2">
            <Button variant="primary" disabled={busy}>{busy?"…":"Login"}</Button>
            <Button variant="ghost" onClick={()=>localStorage.removeItem("token")} >Clear token</Button>
          </div>
          {err && <p className="text-red-400 text-sm">{err}</p>}
        </form>
      </CardBody>
    </Card>
  );
}
