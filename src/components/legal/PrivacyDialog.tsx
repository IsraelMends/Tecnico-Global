"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-detail)] rounded px-1">
        Política de Privacidade
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card text-card-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-[var(--primary)]">Política de Privacidade</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Como tratamos seus dados pessoais e garantimos sua segurança e privacidade.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-1 md:pr-2 space-y-6">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">1. Coleta de dados</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Informações que você nos fornece (nome, e‑mail, telefone) em formulários e contato.</li>
              <li>Dados técnicos mínimos para funcionamento do site (cookies essenciais e analytics anonimizados).</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">2. Finalidades</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Responder solicitações, enviar informações sobre cursos e suporte ao aluno.</li>
              <li>Melhorar a experiência no site e a qualidade de nossos serviços.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">3. Compartilhamento</h3>
            <p className="text-muted-foreground">Não vendemos seus dados. Podemos compartilhar com provedores confiáveis apenas para operação do serviço (ex: hospedagem), sempre sob acordo de confidencialidade.</p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">4. Seus direitos (LGPD)</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Acessar, corrigir, atualizar e solicitar a exclusão dos seus dados.</li>
              <li>Revogar consentimento e se opor a tratamentos específicos.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">5. Contato do controlador</h3>
            <p className="text-muted-foreground">Para exercer seus direitos, entre em contato pelos canais informados no site (rodapé/contato).</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}


