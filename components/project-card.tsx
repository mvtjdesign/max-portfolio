type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function ProjectCard({ title, subtitle, description }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6">
      <header className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">{subtitle}</p>
        <h3 className="text-xl font-medium tracking-tight text-zinc-950">{title}</h3>
      </header>
      <p className="text-sm leading-7 text-zinc-700">{description}</p>
    </article>
  );
}
