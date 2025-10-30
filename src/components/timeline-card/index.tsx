import { Card } from "@/components/ui/card";

interface TimelineCardProps {
  title: string;
  description: string;
  isLeft?: boolean;
}

export function TimelineCard({  title, description, isLeft = false }: TimelineCardProps) {
  return (
    <div className={`flex items-center mb-12 ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 px-6">
        <Card className="p-6 shadow-lg rounded-2xl border border-[var(--amber)]/50 bg-white transition-all duration-300 hover:shadow-elegant animate-fade-in">
          <h4 className="text-2xl font-bold mb-3 text-[var(--primary)]">{title}</h4>
          <p className="text-foreground leading-relaxed">{description}</p>
        </Card>
      </div>
      
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 bg-gradient-to-br from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-full shadow-elegant ring-4 ring-white"></div>
        <div className="w-1 h-20 bg-gradient-to-b from-[var(--primary)]/70 to-[var(--primary-glow)] mt-2"></div>
      </div>
      
      <div className="flex-1"></div>
    </div>
  );
}