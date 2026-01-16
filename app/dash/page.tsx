"use client";

import React, { useState } from "react";
import {
  Send,
  User,
  Sparkles,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

/* =====================
   Types
===================== */

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
  timestamp: string;
}

interface Candidate {
  id: number;
  name: string;
  score: number;
  position: string;
  status: "Entrevista Técnica" | "Preseleccionado";
  experience: string;
  skills: string[];
  reasoning: string;
  sources: string[];
}

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

/* =====================
   Component
===================== */

const CopilotDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy tu AI Copilot. Puedo ayudarte a encontrar candidatos, explicar rankings y responder preguntas sobre el pipeline.",
      timestamp: "09:15",
    },
  ]);

  const [input, setInput] = useState<string>("");
  const [selectedCandidate, setSelectedCandidate] =
    useState<Candidate | null>(null);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "María González",
      score: 92,
      position: "Senior .NET Developer",
      status: "Entrevista Técnica",
      experience: "7 años",
      skills: [".NET Core", "Azure", "React", "SQL Server"],
      reasoning:
        "Fuerte experiencia en .NET Core y Azure. Lideró migración de monolito a microservicios en proyecto enterprise.",
      sources: ["CV - pág. 1-2", "LinkedIn Profile", "Screening Notes"],
    },
    {
      id: 2,
      name: "Juan Pérez",
      score: 88,
      position: "Senior .NET Developer",
      status: "Preseleccionado",
      experience: "6 años",
      skills: [".NET Framework", "Angular", "Docker", "Azure DevOps"],
      reasoning:
        "Sólida experiencia en .NET Framework. Certificación Azure. Experiencia en metodologías ágiles.",
      sources: ["CV - pág. 1", "Referencias"],
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      score: 85,
      position: "Senior .NET Developer",
      status: "Preseleccionado",
      experience: "5 años",
      skills: [".NET Core", "React", "PostgreSQL", "Kubernetes"],
      reasoning:
        "Experiencia en arquitecturas cloud-native. Contribuciones a proyectos open source en .NET.",
      sources: ["CV - pág. 1-2", "GitHub Profile"],
    },
  ];

  const exampleQuestions: string[] = [
    "¿Qué candidatos tienen experiencia en Azure?",
    "¿Por qué María está rankeada más alto que Juan?",
    "¿Hay candidatos en riesgo de perder interés?",
  ];

  const handleSend = (): void => {
    if (!input.trim()) return;

    const timestamp = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage: Message = {
      role: "user",
      content: input,
      timestamp,
    };

    const response: Message = {
      role: "assistant",
      content: "",
      timestamp,
    };

    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("azure")) {
      response.content =
        "Encontré 2 candidatos con experiencia en Azure:\n\n1. **María González** (Score: 92)\n2. **Juan Pérez** (Score: 88)\n\n📄 Fuentes: CVs, LinkedIn";
    } else if (lowerInput.includes("maría") && lowerInput.includes("juan")) {
      response.content =
        "María tiene un score más alto por experiencia cloud-native y stack moderno (.NET Core + Azure).";
    } else if (lowerInput.includes("riesgo")) {
      response.content =
        "⚠️ Ana Rodríguez está en riesgo por falta de contacto en los últimos 12 días.";
    } else {
      response.content =
        "Puedo ayudarte a analizar candidatos, rankings y riesgos del pipeline.";
    }

    setMessages((prev) => [...prev, newMessage, response]);
    setInput("");
  };

  const handleExampleClick = (question: string): void => {
    setInput(question);
  };

  const stats: Stat[] = [
    {
      label: "Candidatos Activos",
      value: "47",
      icon: User,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Score Promedio",
      value: "78",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Tiempo Promedio",
      value: "14 días",
      icon: Clock,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "En Entrevistas",
      value: "12",
      icon: CheckCircle,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  /* =====================
     JSX (SIN CAMBIOS VISUALES)
  ===================== */

  return (
    <div className="w-full h-full bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">AI Recruiter Copilot para World Teams</h1>
              <p className="text-sm text-slate-600">Senior .NET Developer - Búsqueda #2024-047</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-white border-b border-slate-200">
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bg} rounded-lg p-4`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Candidates List */}
        <div className="w-96 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-4 border-b border-slate-200">
            <h2 className="font-semibold text-slate-800">Top Candidatos</h2>
            <p className="text-sm text-slate-600">Rankeados por IA</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`p-4 border-b border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors ${
                  selectedCandidate?.id === candidate.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
                onClick={() => setSelectedCandidate(candidate)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
                    <p className="text-sm text-slate-600">{candidate.experience} experiencia</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{candidate.score}</div>
                    <div className="text-xs text-slate-500">score</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {candidate.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-xs text-slate-700 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded ${
                    candidate.status === 'Entrevista Técnica' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {candidate.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-2xl rounded-lg px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>
                  <div
                    className={`text-xs mt-2 ${
                      msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Example Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-slate-600 mb-2">Preguntas de ejemplo:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleExampleClick(q)}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-6 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Preguntá sobre candidatos, rankings, pipeline..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Candidate Detail */}
        {selectedCandidate && (
          <div className="w-96 bg-white border-l border-slate-200 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{selectedCandidate.name}</h2>
                  <p className="text-slate-600">{selectedCandidate.position}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{selectedCandidate.score}</div>
                  <div className="text-xs text-slate-500">Match Score</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Por qué este ranking
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed bg-blue-50 p-3 rounded-lg">
                    {selectedCandidate.reasoning}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-600" />
                    Fuentes consultadas
                  </h3>
                  <div className="space-y-2">
                    {selectedCandidate.sources.map((source, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopilotDashboard;
