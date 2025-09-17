"use client";

import React, { useEffect } from "react";
import { Heart, CheckCircle, Star } from "lucide-react";

function ThankYou() {
  // ✅ Configuração do WhatsApp
  const phone = "55999988887777"; // Substitua pelo número desejado (DDI + DDD + número, só dígitos)
  const message = "Olá! Acabei de finalizar o cadastro e gostaria de continuar o atendimento.";
  const whatsUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const t = setTimeout(() => {
      // abre o WhatsApp na mesma aba
      window.location.href = whatsUrl;
      // 👉 se quiser abrir em nova aba, use:
      // window.open(whatsUrl, "_blank");
    }, 2000); // 2 segundos

    return () => clearTimeout(t);
  }, [whatsUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-16 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-48 h-48 bg-green-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-24 h-24 bg-orange-200/25 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Estrelas decorativas */}
        {[...Array(12)].map((_, i) => (
          <Star
            key={`star-${Math.random().toString(36).substring(7)}-${i}`}
            className="absolute text-yellow-300/40 animate-pulse"
            size={Math.random() * 16 + 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center w-full animate-fade-in">
        {/* Ícone principal com animação */}
        <div className="flex justify-center mt-20">
          <div className="relative flex items-center justify-center w-48 h-48">
            {/* coração */}
            <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-2xl z-10">
              <Heart
                className="w-16 h-16 text-white animate-pulse"
                fill="currentColor"
              />
            </div>

            {/* círculos decorativos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-40 h-40 border-2 border-green-300/30 rounded-full animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute w-48 h-48 border-2 border-blue-300/20 rounded-full animate-spin"
                style={{
                  animationDuration: "12s",
                  animationDirection: "reverse",
                }}
              />
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Obrigado!
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Sua confiança significa tudo para nós
        </p>

        {/* Mensagem principal */}
        <div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/50 mb-12 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Pronto! ✨ <br />
            Em instantes você será levado para o WhatsApp, onde nossa equipe já
            está preparada para continuar o atendimento e tirar todas as suas
            dúvidas.
          </p>

          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">
              Processo concluído com sucesso!
            </span>
          </div>
        </div>

        {/* Cards de informações */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Qualidade Garantida
            </h3>
            <p className="text-gray-600 text-sm">
              Comprometidos com a excelência em cada detalhe
            </p>
          </div>

          <div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Atendimento Personalizado
            </h3>
            <p className="text-gray-600 text-sm">
              Cuidado especial em cada interação
            </p>
          </div>

          <div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Experiência Premium
            </h3>
            <p className="text-gray-600 text-sm">
              Superando expectativas constantemente
            </p>
          </div>
        </div>

        {/* Mensagem final */}
        <div
          className="mt-12 animate-slide-up"
          style={{ animationDelay: "1.4s" }}
        >
          <p className="text-gray-500 text-sm">
            Esperamos vê-lo novamente em breve! 🌟
          </p>
        </div>

        {/* Link fallback caso o redirect falhe */}
        <div className="mt-4">
          <a
            href={whatsUrl}
            target="_blank"
            className="text-sm text-green-700 underline"
          >
            Não foi redirecionado? Clique aqui para abrir o WhatsApp
          </a>
        </div>
      </div>

      {/* Efeitos de luz nos cantos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-200/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
}

export default ThankYou;
