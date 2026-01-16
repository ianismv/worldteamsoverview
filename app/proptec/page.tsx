"use client";

import React, { useState } from "react";
import {
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Layers,
  Rocket,
} from "lucide-react";

/* =====================================================
   Página Conceptual – Vision UI
   Objetivo: explicar la propuesta, no vender un producto final
===================================================== */

type Section =
  | "vision"
  | "problem"
  | "solution"
  | "architecture"
  | "impact"
  | "risks"
  | "evolution";

const sections: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "vision", label: "Visión", icon: Sparkles },
  { id: "problem", label: "Problema", icon: LayoutDashboard },
  { id: "solution", label: "Solución", icon: Layers },
  { id: "architecture", label: "Arquitectura", icon: ShieldCheck },
  { id: "impact", label: "Impacto", icon: TrendingUp },
  { id: "risks", label: "Riesgos", icon: ShieldCheck },
  { id: "evolution", label: "Evolución", icon: Rocket },
];

const CopilotVisionPage: React.FC = () => {
  const [active, setActive] = useState<Section>("vision");

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800">AI Recruiter Copilot</h1>
            <p className="text-sm text-slate-500">Visión Conceptual</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                active === s.id
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-4xl">
        {active === "vision" && (
          <Section title="Contexto y Visión">
            <p>
              El crecimiento del recruiting remoto incrementó la carga operativa
              y cognitiva de los recruiters. Gran parte del tiempo se destina a
              tareas repetitivas y fragmentadas que impactan directamente en la
              calidad de las decisiones y la experiencia del candidato.
            </p>
            <p>
              Esta página presenta una <strong>visión conceptual</strong> de cómo
              Work Teams podría incorporar IA generativa de forma responsable,
              explicable y alineada a procesos humanos existentes.
            </p>
          </Section>
        )}

        {active === "problem" && (
          <Section title="Problema de Negocio">
            <ul className="list-disc pl-5 space-y-2">
              <li>Análisis manual de grandes volúmenes de CVs.</li>
              <li>Información distribuida en múltiples fuentes.</li>
              <li>Falta de trazabilidad y justificación clara.</li>
              <li>Demoras que afectan la candidate experience.</li>
            </ul>
          </Section>
        )}

        {active === "solution" && (
          <Section title="Visión de la Solución">
            <p>
              <strong>AI Recruiter Copilot</strong> acompaña al recruiter durante
              todo el proceso. No reemplaza decisiones: las asiste, explica y
              ordena información relevante.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700">
              “Copilot, not Autopilot. El control final permanece en manos
              humanas.”
            </blockquote>
          </Section>
        )}

        {active === "architecture" && (
          <Section title="Arquitectura Conceptual">
            <ul className="list-disc pl-5 space-y-2">
              <li>Backend tipado y auditable para lógica crítica.</li>
              <li>Capa RAG que conecta CVs, JDs y notas.</li>
              <li>Modelo de lenguaje desacoplado del proveedor.</li>
              <li>Frontend explicativo, orientado a recruiters.</li>
            </ul>
          </Section>
        )}

        {active === "impact" && (
          <Section title="Impacto Esperado">
            <ul className="list-disc pl-5 space-y-2">
              <li>Reducción significativa del tiempo de screening.</li>
              <li>Mayor consistencia entre recruiters.</li>
              <li>Mejor tiempo de respuesta al candidato.</li>
              <li>Escalabilidad sin aumentar headcount.</li>
            </ul>
          </Section>
        )}

        {active === "risks" && (
          <Section title="Gestión Responsable de Riesgos">
            <ul className="list-disc pl-5 space-y-2">
              <li>RAG estricto para evitar alucinaciones.</li>
              <li>Visibilidad de factores para mitigar sesgos.</li>
              <li>Adopción gradual con quick wins reales.</li>
            </ul>
          </Section>
        )}

        {active === "evolution" && (
          <Section title="Evolución Potencial">
            <p>
              El Copilot no es una feature aislada, sino una capacidad reutilizable
              que puede extenderse a onboarding, knowledge bases y otros procesos
              críticos del negocio.
            </p>
          </Section>
        )}
      </main>
    </div>
  );
};

/* =====================
   Reusable Section Wrapper
===================== */

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
  </div>
);

export default CopilotVisionPage;