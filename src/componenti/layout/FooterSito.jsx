import { footer } from "../../dati/contenutiHome";

export default function FooterSito() {
  const { nome, tagline, colonne, copyright } = footer;

  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span className="text-base font-bold text-white">{nome}</span>
            <span className="text-sm text-slate-400">{tagline}</span>
          </div>

          {/* Colonne link */}
          {colonne.map((colonna) => (
            <div key={colonna.titolo} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {colonna.titolo}
              </span>
              <ul className="flex flex-col gap-2">
                {colonna.voci.map((voce) => (
                  <li key={voce}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                    >
                      {voce}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divisore e copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-center text-xs text-slate-600">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
