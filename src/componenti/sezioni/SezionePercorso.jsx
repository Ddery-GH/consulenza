import { MessageSquare, Search, FileText } from "lucide-react";
import { percorso } from "../../dati/contenutiHome";

const iconeStep = [MessageSquare, Search, FileText];

export default function SezionePercorso() {
  const { sezione, titolo, sottotitolo, step } = percorso;

  return (
    <section id="percorso" className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Intestazione */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            {sezione}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {titolo}
          </h2>
          <p className="leading-relaxed text-slate-400">{sottotitolo}</p>
        </div>

        {/* Step */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* Linea orizzontale di connessione — solo desktop */}
          <div
            className="pointer-events-none absolute left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] top-10 hidden h-px bg-slate-700 md:block"
            aria-hidden="true"
          />

          {step.map((s, index) => {
            const Icona = iconeStep[index];
            const isUltimo = index === step.length - 1;

            return (
              <div
                key={s.numero}
                className="relative flex flex-col items-center gap-5 text-center"
              >
                {/* Cerchio icona */}
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 transition ${
                    isUltimo
                      ? "border-sky-400 bg-sky-400/10"
                      : "border-slate-700 bg-slate-800"
                  }`}
                >
                  <Icona
                    size={24}
                    className={isUltimo ? "text-sky-400" : "text-slate-400"}
                  />
                  {/* Badge numero */}
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white shadow-sm">
                    {s.numero}
                  </span>
                </div>

                {/* Testo */}
                <div className="flex max-w-xs flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">{s.titolo}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {s.descrizione}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
