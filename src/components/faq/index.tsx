"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  { q: "Quais serviços vocês oferecem?", a: "Consultoria, implementação e suporte contínuo em soluções técnicas." },
  { q: "Como funciona o suporte?", a: "Atendimento via e-mail e canal dedicado em horário comercial." },
  { q: "Há contrato mínimo?", a: "Podemos começar por projeto fechado ou plano mensal sem fidelidade." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 bg-[#f3f3f3]">
      <div className="container mx-auto px-4 ">
        <h2 id="faq-title" className="text-3xl font-bold mb-8 text-gray-900">
          Perguntas frequentes
        </h2>

        <div className=" bg-white divide-y divide-gray-200 border border-gray-200 rounded-2xl">
          {QA_LIST.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="p-4">
                <button
                  className="w-full text-left flex items-center justify-between py-2"
                  aria-expanded={open}
                  aria-controls={`faq-item-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <span aria-hidden className="ml-4">{open ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-item-${i}`}
                  role="region"
                  aria-live="polite"
                  className={`grid transition-[grid-template-rows] duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden text-gray-700">
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
