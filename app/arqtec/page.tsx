"use client";
import React, { useState } from "react";
import {
  FileText,
  Database,
  Brain,
  MessageSquare,
  BarChart3,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

/* =====================
   Core Architecture (Fundamentals)
===================== */

const components = {
  ingestion: {
    title: "Data Ingestion",
    tech: "Emails, Forms, ATS",
    details:
      "Ingesta CVs desde distintas fuentes. Normaliza formatos y extrae texto limpio. La calidad de esta etapa impacta directamente en todo el sistema.",
  },
  vectordb: {
    title: "Vector Store",
    tech: "Pinecone / Chroma",
    details:
      "Almacena embeddings de CVs y Job Descriptions. Permite búsqueda semántica eficiente. No es una base de datos tradicional ni fuente de verdad.",
  },
  rag: {
    title: "RAG Pipeline",
    tech: "Retrieval + Prompting",
    details:
      "Recupera información relevante y la inyecta al prompt. El modelo solo puede responder usando este contexto (grounding).",
  },
  llm: {
    title: "LLM",
    tech: "GPT / Gemini (model-agnostic)",
    details:
      "Resume perfiles, explica coincidencias y asiste al recruiter. No toma decisiones finales ni actúa de forma autónoma.",
  },
  backend: {
    title: "Backend API",
    tech: ".NET 8 Web API",
    details:
      "Orquesta el flujo completo: ingesta, retrieval y consultas al LLM. Centraliza reglas, control y trazabilidad.",
  },
  frontend: {
    title: "Recruiter Dashboard",
    tech: "React + Tailwind",
    details:
      "Interfaz para explorar candidatos, ver rankings y entender por qué el sistema sugiere ciertos perfiles.",
  },
} as const;

type ComponentKey = keyof typeof components;

/* =====================
   Design Principles
===================== */

const principles = [
  {
    icon: CheckCircle,
    text: "El LLM asiste, no decide",
    color: "text-green-600",
  },
  {
    icon: CheckCircle,
    text: "Respuestas basadas en contexto recuperado",
    color: "text-green-600",
  },
  {
    icon: CheckCircle,
    text: "Decisiones explicables para el recruiter",
    color: "text-green-600",
  },
  {
    icon: AlertCircle,
    text: "El control final siempre es humano",
    color: "text-blue-600",
  },
];

/* =====================
   Component
===================== */

const ArchitectureDiagram = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey | null>(null);

  return (
    <div className="w-full h-full bg-slate-50 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            AI Recruiter Copilot para World Teams
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Arquitectura base para un sistema RAG + LLM orientado a asistencia,
            explicabilidad y control humano.
          </p>
        </div>

        {/* Architecture */}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Arquitectura Fundamental
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(components) as ComponentKey[]).map((key) => (
              <div
                key={key}
                onClick={() => setSelectedComponent(key)}
                className={`p-5 rounded-lg border cursor-pointer transition ${
                  selectedComponent === key
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className="font-semibold text-slate-800">
                  {components[key].title}
                </h3>
                <p className="text-sm text-slate-600">
                  {components[key].tech}
                </p>
              </div>
            ))}
          </div>

          {selectedComponent && (
            <div className="mt-6 p-5 bg-slate-50 rounded-lg border">
              <h3 className="font-semibold text-slate-800 mb-2">
                {components[selectedComponent].title}
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Stack:</strong> {components[selectedComponent].tech}
              </p>
              <p className="text-slate-700">
                {components[selectedComponent].details}
              </p>
            </div>
          )}
        </div>

        {/* Principles */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Principios de Diseño
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
              >
                <p.icon className={`w-5 h-5 ${p.color} mt-0.5`} />
                <span className="text-slate-700">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArchitectureDiagram;
