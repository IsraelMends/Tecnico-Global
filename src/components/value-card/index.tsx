import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2 animate-slide-up bg-white border border-[var(--amber)]/40 min-h-[220px]">
      <div className="w-16 h-16 bg-[var(--blue-detail)] group-hover:bg-[var(--purple-soft)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[var(--primary)] relative inline-block">
        {title}
        <span className="block mx-auto mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)]" />
      </h3>
      <p className="text-foreground/80 leading-relaxed">{description}</p>
    </Card>
  );
}