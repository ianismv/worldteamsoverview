import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 flex items-center justify-center px-6">
      <section className="max-w-2xl w-full text-center space-y-10">
        
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI Recruiter Copilot para World Teams
          </h1>
          <p className="text-slate-400 text-lg">
            Plataforma inteligente para optimizar procesos de recruiting con IA
          </p>
        </header>

        {/* Actions */}
        <div className="grid gap-4">
          <Link
            href="/proptec"
            className="group rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <h2 className="text-lg font-semibold group-hover:text-white">
              AI Recruiter Copilot – Propuesta técnica
            </h2>
            <p className="text-sm text-slate-400">
              Visión general, objetivos y alcance del sistema
            </p>
          </Link>

          <Link
            href="/arqtec"
            className="group rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <h2 className="text-lg font-semibold group-hover:text-white">
              AI Recruiter Copilot – Arquitectura técnica
            </h2>
            <p className="text-sm text-slate-400">
              Diseño del sistema, flujos y decisiones técnicas
            </p>
          </Link>

          <Link
            href="/dash"
            className="group rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-4 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <h2 className="text-lg font-semibold group-hover:text-white">
              AI Copilot Dashboard – Demo interactivo
            </h2>
            <p className="text-sm text-slate-400">
              Experiencia visual y funcional del copilot en acción
            </p>
          </Link>
        </div>

        {/* Footer */}
        <footer className="pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} AI Recruiter Copilot, Ianis Manos Vignolo
        </footer>
      </section>
    </main>
  );
}
