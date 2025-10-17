import { Card } from "../../ui/card";
import { Course } from "../course-interface";

interface CourseCardProps {
  course: Course;
}

export function CourseCardBody({ course }: CourseCardProps) {
  const { title, description } = course;

  const isList = Array.isArray(description);

  return (
    <Card className="relative overflow-hidden rounded-2xl  bg-card p-0 shadow-sm">
      {/* faixa superior com gradiente, como no layout de referência */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* leve acento de cor no canto, bem sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-accent to-secondary opacity-20"
      />

      <div className="relative p-6 sm:p-7">
        <div className="mb-4 flex items-center gap-2 text-accent">
          <h3 className="text-xl font-semibold leading-tight text-accent">
            {title}
          </h3>
        </div>

        {isList ? (
          <ol className="list pl-5 space-y-2.5 text-[15px] text-muted-foreground">
            {(description as string[]).map((item, i) => (
              <li key={i} className="text-pretty marker:text-secondary/80">
                {item}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {description as string}
          </p>
        )}
      </div>
    </Card>
  );
}
