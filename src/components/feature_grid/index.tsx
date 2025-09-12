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
    <section id="features" aria-labelledby="features-title" className="py-16 bg-[#f3f3f3]">
      <div className="container mx-auto px-4 justify-center">
        <h2 id="features-title" className="items-center text-3xl font-bold mb-8 text-gray-900">
          Por que escolher a GlobalTec?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <article key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center text-xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
