type Stat = { label: string; value: string };

const STATS: Stat[] = [
  { label: "Projetos entregues", value: "120+" },
  { label: "SLA cumprido", value: "99,9%" },
  { label: "Clientes ativos", value: "50+" },
  { label: "Países atendidos", value: "6" },
];

const Stats = () => {
  return (
    <section aria-labelledby="stats-title" className="py-10 bg-accent">
      <h2 id="stats-title" className="sr-only">Nossos números</h2>
      <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={i} className="text-center text-white">
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="text-sm opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
