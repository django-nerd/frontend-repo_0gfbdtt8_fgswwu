import { useMemo, useState } from "react";
import { CheckCircle2, Compass, Cpu, Wrench, Briefcase, Globe, Users, BookOpen } from "lucide-react";

const INTERESTS = [
  { key: "it", label: "Informatique & Développement", icon: Cpu },
  { key: "industry", label: "Maintenance & Industrie", icon: Wrench },
  { key: "business", label: "Gestion & Commerce", icon: Briefcase },
  { key: "languages", label: "Langues & Tourisme", icon: Globe },
  { key: "social", label: "Social & Éducation", icon: Users },
  { key: "design", label: "Design & Multimédia", icon: BookOpen },
];

const TRACKS = [
  { id: "dev", name: "Développement Informatique", tags: ["it", "design"], level: "Technicien Spécialisé" },
  { id: "net", name: "Réseaux & Systèmes", tags: ["it"], level: "Technicien" },
  { id: "maint", name: "Maintenance Industrielle", tags: ["industry"], level: "Technicien" },
  { id: "elec", name: "Électricité de Bâtiment", tags: ["industry"], level: "Qualification" },
  { id: "com", name: "Commerce & Vente", tags: ["business"], level: "Technicien" },
  { id: "gest", name: "Gestion des Entreprises", tags: ["business"], level: "Technicien Spécialisé" },
  { id: "tour", name: "Tourisme & Hôtellerie", tags: ["languages"], level: "Technicien" },
  { id: "inf", name: "Informatique Bureautique", tags: ["business", "it"], level: "Qualification" },
  { id: "dsn", name: "Infographie & Multimédia", tags: ["design"], level: "Technicien" },
  { id: "edu", name: "Éducation Préscolaire", tags: ["social"], level: "Qualification" },
];

export default function OrientationForm() {
  const [selected, setSelected] = useState([]);
  const [level, setLevel] = useState("any");

  const suggestions = useMemo(() => {
    const score = (track) => {
      let s = 0;
      for (const t of track.tags) if (selected.includes(t)) s += 2;
      if (level !== "any" && track.level === level) s += 1;
      return s;
    };
    const sorted = [...TRACKS].sort((a, b) => score(b) - score(a));
    return sorted.slice(0, 4);
  }, [selected, level]);

  const toggle = (key) => {
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  return (
    <section id="guide" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Assistant d'orientation</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Sélectionne tes centres d'intérêt et ton niveau souhaité. Nous te proposons des pistes adaptées.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {INTERESTS.map(({ key, label, icon: Icon }) => {
              const active = selected.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggle(key)}
                  className={`group flex items-center gap-3 rounded-lg border px-3 py-3 text-left transition ${
                    active
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span className={`shrink-0 rounded-md p-2 ${active ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm text-neutral-600 dark:text-neutral-300">Niveau désiré</label>
            <div className="flex items-center gap-2">
              {[
                { value: "any", label: "Peu importe" },
                { value: "Qualification", label: "Qualification" },
                { value: "Technicien", label: "Technicien" },
                { value: "Technicien Spécialisé", label: "Technicien Spécialisé" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setLevel(opt.value)}
                  className={`rounded-full px-3 py-1.5 text-sm border transition ${
                    level === opt.value
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/50 shadow-sm p-4">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold">Suggestions pour toi</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {suggestions.map((t) => (
              <li key={t.id} className="flex items-start gap-3 rounded-lg border border-neutral-200 dark:border-neutral-700 p-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <div className="font-medium leading-tight">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.level}</div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-neutral-500">
            Astuce: sélectionne 2 à 3 centres d'intérêt pour des résultats plus précis.
          </p>
        </aside>
      </div>
    </section>
  );
}
