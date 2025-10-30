"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { TimelineCard } from "@/components/timeline-card";
import { ValueCard } from "@/components/value-card";

import { WhatsAppFloatButton } from "@/components/whatsapp_float_button";
import AppModal from "@/components/app-modal";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";

import buildingImage from "@/assets/buildingImage.jpg";

const About = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* elementos claros de fundo para dar vida sem escurecer */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/4 w-80 h-80 rounded-full bg-[var(--amber)]/30 blur-3xl" />
            <div className="absolute bottom-0 right-1/5 w-72 h-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-[var(--amber)]/20 text-[var(--gray-contrast)] border border-[var(--amber)]/50 mb-4">Formação técnica reconhecida • Em todo o Brasil</span>
              <h1 className="text-5xl md:text-6xl font-black text-[var(--color-foreground)] mb-6 animate-fade-in">
                Sobre a
                <span className="relative inline-block ml-2">
                  Global Tec
                  <span className="absolute left-0 -bottom-2 w-full h-2 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)]"></span>
                </span>
              </h1>
              <p className="text-xl text-[var(--gray-contrast)]/80 leading-relaxed animate-slide-up">
                Transformamos experiência em qualificação. Cursos técnicos regulares e por competência para acelerar sua carreira com reconhecimento e praticidade.
              </p>
            </div>
          </div>
        </section>


        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Nosso propósito é simples e poderoso: levar ensino de
                  qualidade a quem deseja crescer, com metodologias modernas,
                  acessíveis e que valorizam a prática. Enquanto nossos alunos
                  conquistam qualificação e oportunidades reais, você encontra
                  em nós uma parceira comprometida em formar profissionais
                  preparados para os desafios do futuro.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  Na Global Tec, acreditamos que educação técnica é mais do que
                  conhecimento — é oportunidade, transformação e impacto. Venha
                  descobrir como podemos construir juntos histórias de sucesso.
                </p>
              </div>
              <div className="animate-slide-up">
                <img
                  src={buildingImage.src}
                  alt="Our company headquarters"
                  className="rounded-lg shadow-elegant w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">
                Nossa Missão e Visão
              </h2>
              <p className="text-xl text-[var(--primary)] max-w-2xl mx-auto">
                A jornada que moldou quem somos hoje e para onde estamos indo.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <TimelineCard
                title="Missão"
                description="Oferecer formação técnica acessível e transformadora, reconhecendo a experiência prática e promovendo oportunidades reais para quem deseja crescer no mercado de trabalho."
              />
              <TimelineCard
                title="Visão"
                description="Ser referência nacional em educação técnica, conectando qualidade e inovação para capacitar milhares de profissionais até 2030, impulsionando o desenvolvimento das comunidades e do país."
                isLeft={true}
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* decoração suave */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-12 right-1/4 w-72 h-72 rounded-full bg-[var(--amber)]/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/5 w-80 h-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold bg-[var(--amber)]/20 text-[var(--gray-contrast)] border border-[var(--amber)]/40 mb-3">O que nos guia</span>
              <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Princípios que sustentam nosso compromisso com a sua evolução.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="h-full"><ValueCard
                icon={Target}
                title="Compromisso"
                description="Seriedade e transparência em cada etapa da jornada educacional."
              /></div>
              <div className="h-full"><ValueCard
                icon={Users}
                title="Inovação"
                description="Métodos modernos que unem teoria e prática com eficiência."
              /></div>
              <div className="h-full"><ValueCard
                icon={Lightbulb}
                title="Valorização da Experiência"
                description="Sua trajetória profissional conta — e potencializa sua formação."
              /></div>
              <div className="h-full"><ValueCard
                icon={Award}
                title="Acessibilidade"
                description="Educação técnica de qualidade, ao alcance de todos."
              /></div>
              <div className="h-full"><ValueCard
                icon={Award}
                title="Transformação"
                description="Conhecimento como ferramenta real de mudança de vida."
              /></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--color-muted)] text-center">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[var(--color-foreground)] mb-6">
              Pronto para trabalharmos juntos?
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)] mb-8 max-w-2xl mx-auto">
              Vamos criar algo incrível. Fale com nosso time e descubra o melhor caminho para sua certificação.
            </p>
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-tr from-[var(--primary)] via-[var(--amber)] to-[var(--burnt-orange)] text-white font-bold hover:scale-105 transition-all shadow-lg shadow-[var(--primary-glow)]"
            >
              Comece Hoje
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </section>

        <AppModal
          isOpen={open}
          onClose={() => setOpen(false)}
          whatsappNumber="5594992294042" // DDI + DDD + número, apenas dígitos
          policyUrl="/politica-de-privacidade"
          originLabel="Botão Hero"
        />
      </div>

      <footer>
        <Footer />
      </footer>
      <WhatsAppFloatButton />
    </>
  );
};

export default About;
