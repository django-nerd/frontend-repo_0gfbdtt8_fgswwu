import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import OrientationForm from "./components/OrientationForm";
import TracksGrid from "./components/TracksGrid";

function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Programme d'orientation des stagiaires OFPPT
        </p>
        <p className="opacity-80">Maquette de démonstration – non officiel</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <HeaderNav />
      <Hero />
      <OrientationForm />
      <TracksGrid />
      <Footer />
    </div>
  );
}
