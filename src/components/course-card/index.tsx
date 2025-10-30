import { CourseCardBody } from "./course-body";
import { courses } from "./course-data";

export const CourseCard = () => {
  return (
    <section id="Courses" className="relative py-20 sm:py-24">
      {/* fundo decorativo usando tokens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-all duration-500 group-hover:blur-2xl"
      >
        <div className="absolute -top-24 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-gradient-primary animate-pulse" />
        <div className="absolute right-[-10%] top-1/4 h-64 w-64 rotate-12 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-hero animate-floating" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 flex flex-col items-center">
          {/* Badge novo/atualizado */}
          <span className="mb-3 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-[var(--blue-detail)] text-white shadow shadow-[var(--primary-glow)] animate-fade-in">
            100% Reconhecido MEC
          </span>
          <h2 className="mt-2 text-balance text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent drop-shadow-md animate-slide-up">
            Nossos Cursos Técnicos
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg max-w-md mx-auto animate-fade-in">
            Certifique-se em poucos dias e dê o próximo passo no seu futuro!
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group relative rounded-2xl bg-transparent p-0 transition hover:-translate-y-1 h-full"
            >
              <CourseCardBody course={course} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
