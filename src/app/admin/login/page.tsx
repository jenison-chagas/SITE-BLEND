
import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Acesso administrativo | Blend Creative",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050607] px-5 py-12 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#0066ad]/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#ff9f1c]/10 blur-[120px]"
      />

      <section className="relative w-full max-w-md">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-white/50 transition hover:text-[#ff9f1c]"
        >
          ← Voltar ao site
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl sm:p-9">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f1c]">
              Blend Creative
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Painel administrativo
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Entre com suas credenciais para gerenciar os projetos do estúdio.
            </p>
          </div>

          <LoginForm />

          <p className="mt-7 text-center text-xs text-white/30">
            Acesso restrito à administração.
          </p>
        </div>
      </section>
    </main>
  );
}
