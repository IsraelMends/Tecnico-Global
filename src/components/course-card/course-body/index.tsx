import { Card } from "../../ui/card";
import { Course } from "../course-interface";

interface CourseCardProps {
  course: Course;
}

export function CourseCardBody({ course }: CourseCardProps) {
  const { title, description } = course;
  const isList = Array.isArray(description);

  return (
    <Card className="relative overflow-hidden rounded-2xl bg-card p-0 shadow-sm flex flex-col flex-1 h-full">
      {/* faixa superior com gradiente */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)]" />

      {/* leve acento de cor no canto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-[var(--purple-soft)] opacity-20"
      />

      <div className="relative p-6 sm:p-7 flex flex-col flex-1">
        <div className="mb-4 flex items-center gap-2 text-[var(--primary)] min-h-10">
          <h3 className="text-xl font-semibold leading-tight text-[var(--primary)]">
            {title}
          </h3>
        </div>

        <div className="flex-1 min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
          {isList ? (
            <ol className="list pl-5 space-y-2.5 text-[15px] text-muted-foreground">
              {(description as string[]).map((item, i) => (
                <li key={i} className="text-pretty marker:text-[var(--amber)]">
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
      </div>
    </Card>
  );
}
