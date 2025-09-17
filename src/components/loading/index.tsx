"use client";

import React, { useEffect, useState } from "react";
import { Loader2, Sparkles, Zap, CheckCircle } from "lucide-react";

interface LoadingProps {
  onComplete: () => void;
}

function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Sparkles, text: "Inicializando sistema...", color: "text-blue-500" },
    { icon: Zap,      text: "Carregando recursos...",  color: "text-purple-500" },
    { icon: Loader2,  text: "Processando dados...",    color: "text-green-500" },
    { icon: CheckCircle, text: "Finalizando...",       color: "text-orange-500" },
  ];

  // ⏱️ Duração TOTAL: 5s
  useEffect(() => {
    const duration = 5000; // ms
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      // step atual baseado no progresso (0..len-1)
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor((pct / 100) * steps.length)
      );
      setCurrentStep(stepIndex);

      if (elapsed >= duration) {
        clearInterval(interval);
        onComplete(); // dispara exatamente aos 5s
      }
    }, 5);

    return () => clearInterval(interval);
  }, [onComplete, steps.length]);

  const CurrentIcon = steps[currentStep]?.icon || Loader2;
  const isComplete = progress >= 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Partículas */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`floating-particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* CONTEÚDO CENTRAL — ícone colado no texto */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Loader + Ícone */}
        <div className="relative flex items-center justify-center w-32 h-32 mb-3">
          {/* Ícone central */}
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10 z-10">
            <CurrentIcon
              className={`w-12 h-12 ${
                steps[currentStep]?.color || "text-blue-500"
              } ${currentStep === 2 ? "animate-spin" : "animate-pulse"}`}
            />
          </div>
          {/* Anéis */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-32 h-32 border-2 border-white/10 rounded-full animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute w-28 h-28 border-2 border-purple-500/30 rounded-full animate-spin"
              style={{ animationDuration: "2s", animationDirection: "reverse" }}
            />
          </div>
        </div>

        {/* Título e subtítulo — pertinho do ícone */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Carregando
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          {steps[currentStep]?.text || "Preparando tudo para você..."}
        </p>

        {/* Barra de progresso */}
        <div className="mb-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progresso</span>
            <span className="text-sm text-white font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm border border-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-linear relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Indicadores de etapas */}
        <div className="flex justify-center space-x-4 mb-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div
                key={`loading-step-${index}`}
                className={`flex flex-col items-center transition-all duration-300 ${
                  isActive ? "scale-110" : isCompleted ? "scale-100" : "scale-90 opacity-60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted
                      ? "bg-green-500/20 border-green-500 text-green-400"
                      : isActive
                      ? step.color + " border-white/30 bg-white/10"
                      : "bg-gray-700/50 border-gray-600 text-gray-500"
                  }`}
                >
                  <StepIcon className={`w-5 h-5 ${isActive && index === 2 ? "animate-spin" : ""}`} />
                </div>
                <div
                  className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                    isActive ? step.color.replace("text-", "bg-") : "bg-gray-600"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Mensagem de status */}
        <p className="text-sm text-gray-400">
          {isComplete
            ? "✨ Carregamento concluído! Redirecionando..."
            : "Por favor, aguarde enquanto preparamos tudo..."}
        </p>
      </div>

      {/* Brilhos nos cantos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

export default Loading;
