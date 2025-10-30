"use client";

import { useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  { q: "O que é um curso técnico por competência?", a: "É a modalidade que valida sua experiência profissional para emissão do certificado técnico reconhecido pelo MEC, sem repetir o que você já domina." },
  { q: "Quem pode fazer a certificação por competência?", a: "Profissionais com, no mínimo, 2 anos de experiência comprovada na área desejada." },
  { q: "Preciso ter ensino médio concluído?", a: "Sim. É necessário ter concluído o ensino médio ou estar no último ano para emissão do certificado." },
  { q: "Quanto tempo leva para concluir?", a: "Após validação da documentação, é possível concluir em até 48 horas, dependendo da análise." },
  { q: "É online ou presencial?", a: "Etapas teóricas online. Quando necessário, práticas podem ocorrer presencialmente ou em polos parceiros." },
  { q: "Serve para concursos públicos?", a: "Sim, desde que o edital aceite cursos técnicos de nível médio autorizados pelo MEC/SISTEC." },
  { q: "Quais documentos preciso enviar?", a: "Documento de identificação, comprovante de experiência (carteira, contratos, declarações) e histórico/declaração escolar." },
  { q: "Como funciona a avaliação?", a: "Analisamos sua documentação e, se necessário, solicitamos evidências complementares para comprovação das competências." },
  { q: "Existe suporte durante o processo?", a: "Sim. Nosso time acompanha você em cada etapa por e‑mail e WhatsApp." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = QA_LIST.filter((qa) =>
    (qa.q + " " + qa.a).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 bg-[var(--color-muted)] relative">
      {/* divisor gradiente */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/3 h-2 bg-gradient-to-r from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-b-full opacity-80 mb-5" />
      <div className="container mx-auto px-4 ">
        {/* badge */}
        <span className="mb-3 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-[var(--amber)] text-[var(--gray-contrast)] shadow shadow-[var(--primary-glow)] animate-fade-in">
          Dúvidas? Temos a resposta!
        </span>
        <h2 id="faq-title" className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent drop-shadow animate-slide-up mb-4">
          Perguntas frequentes
        </h2>

        {/* busca */}
        <div className="relative max-w-2xl mb-8">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por palavras-chave..."
            className="w-full pl-10 pr-3 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-detail)]"
            aria-label="Buscar perguntas frequentes"
          />
        </div>

        <div className="bg-[var(--color-card)] divide-y divide-[var(--amber)] border border-[var(--amber)] rounded-2xl overflow-hidden">
          {filtered.map((item, i) => {
            const idx = QA_LIST.indexOf(item);
            const open = openIndex === idx;
            return (
              <div key={idx} className="p-4">
                <button
                  className="w-full text-left flex items-center justify-between py-2 font-medium group hover:shadow-md hover:bg-[var(--color-muted)] transition relative rounded-lg px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)]"
                  aria-expanded={open}
                  aria-controls={`faq-item-${idx}`}
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <span className="font-medium text-[var(--color-foreground)] flex items-center gap-3">
                    <span className={`inline-flex items-center justify-center size-6 rounded-md bg-[var(--amber)] text-[var(--gray-contrast)] font-bold`}>?</span>
                    {item.q}
                  </span>
                  <FiChevronRight className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
                </button>
                <div
                  id={`faq-item-${idx}`}
                  role="region"
                  aria-live="polite"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden text-[var(--color-muted-foreground)]">
                    {open && <div className="h-1.5 bg-[var(--amber)] rounded-t-xl mb-2" />}
                    <p className="pt-2 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-[var(--color-muted-foreground)]">Nenhuma pergunta encontrada para sua busca.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
