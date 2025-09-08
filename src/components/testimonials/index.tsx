"use client";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const ITEMS: Testimonial[] = [
  { name: "Ana Souza", role: "CTO, Empresa X", quote: "Entrega rápida e comunicação clara do início ao fim." },
  { name: "Carlos Lima", role: "Gestor de TI, YZ Corp", quote: "Melhorou nossa confiabilidade e reduziu custos." },
  { name: "Mariana Rocha", role: "CEO, Zeta", quote: "Equipe atenciosa e altamente competente." },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" aria-labelledby="testimonials-title" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-title" className="text-3xl font-bold mb-10 text-gray-900">
          O que nossos clientes dizem
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <blockquote className="text-gray-800">
                <span className="sr-only">Depoimento:</span>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-600">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
