import { Cpu, Wrench, Briefcase, Globe, Users, BookOpen } from "lucide-react";

const tracks = [
  {
    title: "Développement & Réseaux",
    icon: Cpu,
    items: ["Développement Informatique", "Réseaux & Systèmes", "Support IT"],
    color: "from-emerald-500/15",
  },
  {
    title: "Industrie & Énergie",
    icon: Wrench,
    items: ["Maintenance Industrielle", "Électricité", "Automatisme"],
    color: "from-amber-500/15",
  },
  {
    title: "Gestion & Commerce",
    icon: Briefcase,
    items: ["Gestion des Entreprises", "Commerce & Vente", "Comptabilité"],
    color: "from-sky-500/15",
  },
  {
    title: "Langues & Tourisme",
    icon: Globe,
    items: ["Hôtellerie", "Tourisme", "Accueil"],
    color: "from-fuchsia-500/15",
  },
  {
    title: "Social & Éducation",
    icon: Users,
    items: ["Éducation Préscolaire", "Assistant Social", "Animation"],
    color: "from-rose-500/15",
  },
  {
    title: "Design & Média",
    icon: BookOpen,
    items: ["Infographie", "Multimédia", "UI/UX"],
    color: "from-violet-500/15",
  },
];

export default function TracksGrid() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Filières principales</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Explore les domaines proposés par l'OFPPT.</p>
        </div>
        <a
          href="#guide"
          className="hidden sm:inline-flex rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 hover:opacity-90"
        >
          Obtenir des recommandations
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(({ title, icon: Icon, items, color }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/50 p-5 shadow-sm"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent pointer-events-none`} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {items.map((it) => (
                  <li key={it} className="list-disc list-inside">{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
