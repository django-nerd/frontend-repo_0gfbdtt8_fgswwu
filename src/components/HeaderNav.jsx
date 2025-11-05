import { GraduationCap, Search, User } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-white/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">OFPPT Orientation</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#programs" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600">Filières</a>
          <a href="#guide" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600">Guide</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
            <Search className="h-4 w-4" />
            <span>Rechercher</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <User className="h-4 w-4" />
            <span>Espace stagiaire</span>
          </button>
        </div>
      </div>
    </header>
  );
}
