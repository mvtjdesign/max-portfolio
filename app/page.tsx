import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 sm:py-20">
        <section className="space-y-8 border-b border-zinc-200 pb-14">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Max Tijerino</p>
          <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Digital marketer and creative systems thinker building AI-assisted workflows, brand systems, and clear user experiences.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-700">
            I work at the intersection of marketing execution, strategic branding, and operational UX. My focus is building practical
            systems that make teams faster, messaging clearer, and outcomes more consistent.
          </p>
        </section>

        <section className="space-y-6" aria-labelledby="selected-work">
          <div className="flex items-end justify-between gap-6">
            <h2 id="selected-work" className="text-2xl font-medium tracking-tight">
              Selected Work
            </h2>
            <p className="text-sm text-zinc-600">Case studies in progress</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} subtitle={project.subtitle} description={project.description} />
            ))}
          </div>
        </section>

        <section className="space-y-5 border-t border-zinc-200 pt-12" aria-labelledby="about-preview">
          <h2 id="about-preview" className="text-2xl font-medium tracking-tight">
            About
          </h2>
          <p className="max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            My background combines digital marketing, brand direction, and UX operations. I design scalable workflows that connect strategy
            to execution, especially where AI can reduce friction and improve quality.
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Max Tijerino</p>
          <p>Digital Marketing · Creative Systems · AI-Assisted Workflows</p>
        </div>
      </footer>
    </div>
  );
}
