"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  { q: "O que é um curso técnico por competência?", a: "O curso técnico por competência é uma modalidade de ensino que permite ao aluno obter o certificado técnico reconhecido pelo MEC com base nas competências profissionais já adquiridas ao longo da sua experiência de trabalho." },
  { q: "Quem pode fazer um curso técnico por competência?", a: "Profissionais com, no mínimo, 2 anos de experiência comprovada na área desejada podem solicitar a certificação por competência." },
  { q: "Preciso de ensino médio completo para me matricular?", a: "Sim. Para obter o certificado técnico é necessário ter concluído o ensino médio ou estar cursando o último ano." },
  { q: "Quanto tempo leva para concluir o curso?", a: "O Curso Técnico por Competência reconhece aquilo que você já sabe fazer.Em vez de estudar novamente o que já domina, você comprova suas habilidades por meio da sua experiência profissional e, após a validação da documentação, pode conquistar o seu certificado em até 48 horas." },
  { q: "O curso é online ou presencial?", a: "A Global Tec oferece flexibilidade: parte teórica online e, quando necessário, atividades práticas podem ser presenciais ou realizadas em polos parceiros." },
  { q: "Posso usar o certificado para concursos públicos?", a: "Sim, desde que o edital do concurso aceite cursos técnicos de nível médio autorizados pelo MEC/SISTEC." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 bg-[var(--color-muted)] relative">
      {/* divisor gradiente */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/3 h-2 bg-gradient-to-r from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-b-full opacity-80 mb-5" />
      <div className="container mx-auto px-4 ">
        {/* badge */}
        <span className="mb-3 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-[var(--amber)] text-[var(--gray-contrast)] shadow shadow-[var(--primary-glow)] animate-fade-in">
          Dúvidas? Temos a resposta!
        </span>
        <h2 id="faq-title" className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent drop-shadow animate-slide-up mb-8">
          Perguntas frequentes
        </h2>

        <div className="bg-[var(--color-card)] divide-y divide-[var(--amber)] border border-[var(--amber)] rounded-2xl">
          {QA_LIST.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="p-4">
                <button
                  className="w-full text-left flex items-center justify-between py-2 font-medium group hover:shadow-md hover:bg-[var(--color-muted)] transition relative"
                  aria-expanded={open}
                  aria-controls={`faq-item-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="font-medium text-[var(--color-foreground)] flex items-center gap-2">
                    {item.q}
                    <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>▶</span>
                  </span>
                </button>
                <div
                  id={`faq-item-${i}`}
                  role="region"
                  aria-live="polite"
                  className={`grid transition-[grid-template-rows] duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden text-[var(--color-muted-foreground)]">
                    {open && <div className="h-1.5 bg-[var(--amber)] rounded-t-xl mb-2" />}
                    <p className="pt-2">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
