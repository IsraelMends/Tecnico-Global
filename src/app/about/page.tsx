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
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 animate-fade-in">
                Sobre a Global Tec
              </h1>
              <p className="text-xl text-black/90 leading-relaxed animate-slide-up">
                Imagine poder transformar sua experiência em qualificação e cada
                escolha de estudo em um passo real para o futuro. A Global Tec
                nasceu para tornar isso possível: oferecemos cursos técnicos
                regulares e por competência, pensados para quem busca
                crescimento profissional de forma prática, rápida e reconhecida.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nosso propósito é simples e poderoso: levar ensino de
                  qualidade a quem deseja crescer, com metodologias modernas,
                  acessíveis e que valorizam a prática. Enquanto nossos alunos
                  conquistam qualificação e oportunidades reais, você encontra
                  em nós uma parceira comprometida em formar profissionais
                  preparados para os desafios do futuro.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossa Missão e Visão
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-accent mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-accent max-w-2xl mx-auto">
                Os princípios que guiam cada passo da nossa jornada.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <ValueCard
                icon={Target}
                title="Compromisso"
                description="Garantir seriedade e transparência em cada etapa da jornada educacional."
              />
              <ValueCard
                icon={Users}
                title="Inovação"
                description="Utilizar métodos modernos que unem teoria e prática de forma eficiente."
              />
              <ValueCard
                icon={Lightbulb}
                title="Valorização da Experiência"
                description="Reconhecer a trajetória profissional como parte essencial da formação."
              />
              <ValueCard
                icon={Award}
                title="Acessibilidade"
                description="Democratizar o acesso à educação técnica de qualidade."
              />
              <ValueCard
                icon={Award}
                title="Transformação"
                description="Acreditar que cada aluno pode mudar sua realidade por meio do conhecimento."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-center">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para trabalhar-mos juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vamos criar algo incrível juntos. Entre em contato e descubra como
              podemos ajudar a dar vida à sua visão.
            </p>
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg"
            >
              Comece Hoje
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </section>

        <AppModal
          isOpen={open}
          onClose={() => setOpen(false)}
          whatsappNumber="5531984770007" // DDI + DDD + número, apenas dígitos
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
