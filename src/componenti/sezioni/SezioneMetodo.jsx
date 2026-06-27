import { Search, Compass, CheckSquare } from "lucide-react";
import { metodo } from "../../dati/contenutiHome";

const iconeMetodo = [Search, Compass, CheckSquare];

export default function SezioneMetodo() {
  const { sezione, titolo, sottotitolo, pilastri } = metodo;

  return (
    <section id="metodo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Intestazione sezione */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            {sezione}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            {titolo}
          </h2>
          <p className="leading-relaxed text-slate-600">{sottotitolo}</p>
        </div>

        {/* Tre pilastri */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pilastri.map((pilastro, index) => {
            const Icona = iconeMetodo[index];
            return (
              <div
                key={pilastro.numero}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                {/* Numero decorativo di sfondo */}
                <div
                  className="pointer-events-none absolute right-6 top-5 select-none text-6xl font-black text-slate-100"
                  aria-hidden="true"
                >
                  {pilastro.numero}
                </div>

                {/* Icona */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-100">
                  <Icona size={22} />
                </div>

                {/* Titolo pilastro */}
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {pilastro.titolo}
                </h3>

                {/* Descrizione */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {pilastro.descrizione}
                </p>

                {/* Linea accent inferiore */}
                <div className="mt-7 h-0.5 w-8 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-14 group-hover:bg-blue-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
