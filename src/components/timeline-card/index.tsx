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
        <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
          <div className="bg-gradient-primary bg-clip-text text-transparent">

          </div>
          <h4 className="text-xl font-semibold mb-3 text-foreground">{title}</h4>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </Card>
      </div>
      
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-primary rounded-full shadow-elegant animate-float"></div>
        <div className="w-1 h-20 bg-gradient-to-b from-primary to-primary-glow mt-2"></div>
      </div>
      
      <div className="flex-1"></div>
    </div>
  );
}