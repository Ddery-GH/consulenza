import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigazione } from "../../dati/contenutiHome";

export default function HeaderSito() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Nome / Brand */}
        <a
          href="#"
          className="text-base font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-700"
        >
          {navigazione.nome}
        </a>

        {/* Nav desktop */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigazione principale"
        >
          {navigazione.voci.map((voce) => (
            <a
              key={voce.etichetta}
              href={voce.ancora}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              {voce.etichetta}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {navigazione.cta}
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 md:hidden"
          onClick={() => setMenuAperto(!menuAperto)}
          aria-expanded={menuAperto}
          aria-label={menuAperto ? "Chiudi menu" : "Apri menu"}
        >
          {menuAperto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAperto && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav
            className="flex flex-col gap-1 px-6 py-4"
            aria-label="Navigazione mobile"
          >
            {navigazione.voci.map((voce) => (
              <a
                key={voce.etichetta}
                href={voce.ancora}
                onClick={() => setMenuAperto(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {voce.etichetta}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setMenuAperto(false)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {navigazione.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
