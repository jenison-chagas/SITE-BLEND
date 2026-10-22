
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMessage("E-mail ou senha inválidos. Verifique seus dados.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setErrorMessage("Não foi possível realizar o login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-white/70"
        >
          E-mail administrativo
        </label>

        <input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="admin@blendcreative.com.br"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff9f1c]"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm text-white/70"
        >
          Senha
        </label>

        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Digite sua senha"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff9f1c]"
        />
      </div>

      {errorMessage && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#ff9f1c] px-4 py-3 font-semibold text-[#050607] transition hover:bg-[#ffb347] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Acessar painel"}
      </button>
    </form>
  );
}
