"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-detail)] rounded px-1">
        Termos de Uso
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card text-card-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-[var(--primary)]">Termos de Uso</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Regras para utilização da plataforma e responsabilidades das partes.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-1 md:pr-2 space-y-6">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">1. Aceite dos termos</h3>
            <p className="text-muted-foreground">Ao utilizar o site, você concorda com estes Termos e com a Política de Privacidade.</p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">2. Uso permitido</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Utilizar o conteúdo para fins informativos e matrícula em nossos cursos.</li>
              <li>É vedado qualquer uso ilícito, abusivo ou que viole direitos de terceiros.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">3. Conteúdos e disponibilidade</h3>
            <p className="text-muted-foreground">Podemos atualizar conteúdos, valores e disponibilidade sem aviso prévio, buscando sempre manter informações corretas e serviço estável.</p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">4. Propriedade intelectual</h3>
            <p className="text-muted-foreground">Textos, marcas e materiais do site pertencem aos respectivos titulares; não é permitido reproduzir sem autorização.</p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--primary)]">5. Foro</h3>
            <p className="text-muted-foreground">Fica eleito o foro da nossa sede para dirimir eventuais controvérsias, salvo legislação aplicável em contrário.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}


