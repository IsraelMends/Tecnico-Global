"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  { q: "Qual a diferença entre curso técnico regular e curso técnico por competência?", a: "O curso técnico regular segue uma carga horária estruturada, com aulas, módulos e atividades obrigatórias. Já o curso técnico por competência avalia e reconhece sua experiência prática comprovada, possibilitando a certificação de forma mais rápida." },
  { q: "O certificado é válido em todo o Brasil?", a: "Sim. Todos os cursos da Global Tec são autorizados e têm validade nacional, podendo ser utilizados tanto para progressão na carreira quanto em concursos e oportunidades no mercado de trabalho." },
  { q: "Quem pode fazer um curso técnico por competência?", a: "Profissionais com, no mínimo, 2 anos de experiência comprovada na área desejada podem solicitar a certificação por competência." },
  {q:"Preciso de ensino médio completo para me matricular?", a:"Sim. Para obter o certificado técnico é necessário ter concluído o ensino médio ou estar cursando o último ano."},
  {q:"Quanto tempo leva para concluir o curso?", a:"Nos cursos regulares, o tempo varia de acordo com a área escolhida (em média de 12 a 24 meses). Já na certificação por competência, o processo pode ser concluído em até 48 horas, após validação da documentação."},
  {q:"O curso é online ou presencial?", a:"A Global Tec oferece flexibilidade: parte teórica online e, quando necessário, atividades práticas podem ser presenciais ou realizadas em polos parceiros."},
  {q:"Posso usar o certificado para concursos públicos?", a:"Sim, desde que o edital do concurso aceite cursos técnicos de nível médio autorizados pelo MEC/SISTEC."},
  {q:"Existe suporte durante o curso?", a:"Sim! Cada aluno conta com acompanhamento de tutores e equipe pedagógica para tirar dúvidas e orientar em cada etapa."},
  {q:"Posso pagar parcelado?", a:"Sim. Oferecemos condições de pagamento facilitadas, além de descontos exclusivos em determinadas campanhas."},
  {q:"Como faço minha matrícula?", a:"Basta entrar em contato com nossa equipe de consultores, que fará toda a orientação do processo de matrícula e acesso ao curso."},
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
