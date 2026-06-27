import { Check } from "lucide-react";
import { profilo } from "../../dati/contenutiHome";

function FotoProfilo() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/70"
      style={{ aspectRatio: "4/5" }}
    >
      {/* Foto */}
      <img
        src="/immagini/enrico-di-prisco.jpg"
        alt="Enrico Di Prisco — Consulente Sport e Terzo Settore"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
      {/* Overlay navy — più marcato in basso per leggibilità badge */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.03) 0%, rgba(15,23,42,0.12) 55%, rgba(15,23,42,0.72) 100%)" }}
        aria-hidden="true"
      />
      {/* Badge istituzionale */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <div className="rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 backdrop-blur-sm">
          <p className="text-xs font-bold leading-snug text-white">
            Dirigente Nazionale OPES / OPES Danza
          </p>
          <p className="mt-0.5 text-xs font-medium text-slate-300">
            Economia &amp; Sport Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SezioneProfilo() {
  const { sezione, titolo, ruolo, sottoRuolo, testo, secondoTesto, valori } = profilo;

  return (
    <section id="profilo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── Colonna sinistra: foto ── */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Frame foto */}
              <div className="relative w-full lg:max-w-[400px]">
                <FotoProfilo />
              </div>
            </div>
          </div>

          {/* ── Colonna destra: testo ── */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {sezione}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                {titolo}
              </h2>
              <span className="text-base font-semibold text-blue-700">
                {ruolo}
              </span>
              <span className="text-sm font-medium text-slate-500">
                {sottoRuolo}
              </span>
            </div>

            <div className="h-px w-10 bg-blue-700" />

            <p className="leading-relaxed text-slate-600">{testo}</p>
            <p className="leading-relaxed text-slate-600">{secondoTesto}</p>

            {/* Valori professionali */}
            <ul className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {valori.map((valore) => (
                <li
                  key={valore}
                  className="flex items-center gap-3 text-sm font-medium text-slate-900"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Check size={11} className="text-blue-700" />
                  </span>
                  {valore}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
