"use client";

import { FaShieldAlt, FaBolt, FaUserFriends, FaGlobe } from "react-icons/fa";

type Feature = { title: string; desc: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  { title: "Segurança", desc: "Boas práticas e verificação contínua.", icon: <FaShieldAlt aria-hidden /> },
  { title: "Performance", desc: "Render rápido e otimizações nativas.", icon: <FaBolt aria-hidden /> },
  { title: "Suporte Humano", desc: "Atendimento ágil por especialistas.", icon: <FaUserFriends aria-hidden /> },
  { title: "Alcance Global", desc: "Infra preparada para expansão.", icon: <FaGlobe aria-hidden /> },
];

const FeatureGrid = () => {
  return (
    <section id="features" aria-labelledby="features-title" className="py-16 bg-[var(--color-muted)]">
      <div className="container mx-auto px-4 justify-center">
        {/* Badge */}
        <span className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-[var(--blue-detail)] text-white shadow shadow-[var(--primary-glow)] animate-fade-in">
          Diferencial GlobalTec
        </span>
        <h2 id="features-title" className="items-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent drop-shadow animate-slide-up mb-8">
          Por que escolher a GlobalTec?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <article key={i} className="bg-[var(--color-card)] rounded-2xl border border-[var(--amber)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:scale-105 hover:-rotate-1 group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-detail)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-detail)] text-white flex items-center justify-center text-xl mb-4 group-hover:bg-[var(--purple-soft)] transition-colors group-hover:scale-125 group-hover:animate-pulse">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)]">{f.title}</h3>
              <p className="text-[var(--color-muted-foreground)] mt-2">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
