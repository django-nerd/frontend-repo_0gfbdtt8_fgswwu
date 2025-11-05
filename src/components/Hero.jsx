import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-sky-100 dark:from-emerald-900/30 dark:via-neutral-900 dark:to-sky-900/20" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-800/70 px-3 py-1.5 text-xs border border-white/50 dark:border-neutral-700 shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Nouveau: Assistant d'orientation intelligent
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Trouve ta filière idéale à l'OFPPT
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Réponds à quelques questions simples sur tes intérêts, compétences et objectifs.
              Nous te proposerons des parcours adaptés parmi les filières de l'OFPPT.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#guide" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 shadow hover:bg-emerald-700">
                <Rocket className="h-4 w-4" />
                Commencer maintenant
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Voir les filières
              </a>
            </div>
            <div className="mt-6 text-xs text-neutral-500">
              Données uniquement utilisées localement pour cette démo.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/60 dark:border-neutral-700 shadow-xl backdrop-blur p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-tr from-emerald-400/30 via-sky-400/30 to-fuchsia-400/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
