import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2 animate-slide-up">
      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-accent">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}