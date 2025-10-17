import { CourseCardBody } from "./course-body";
import { courses } from "./course-data";

export const CourseCard = () => {
  return (
    <section id="Courses" className="relative py-20 sm:py-24">
      {/* fundo decorativo usando tokens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-gradient-primary" />
        <div className="absolute right-[-10%] top-1/4 h-64 w-64 rotate-12 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-hero" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full  px-3 py-1 text-xs font-medium text-muted-foreground/90 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_0_3px_color-mix(in_oklab,theme(colors.primary)_50%,transparent)]" />
            Oferta atualizada
          </div>

          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-5xl">
            Nossos Cursos
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Explore nossa diversa gama de cursos projetados para capacitar você com as
            habilidades e conhecimentos necessários para ter sucesso no mundo dinâmico de hoje.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group relative rounded-2xl bg-transparent p-0 transition hover:-translate-y-1"
            >
              <CourseCardBody course={course} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
