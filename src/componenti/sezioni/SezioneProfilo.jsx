import { Check } from "lucide-react";
import { profilo } from "../../dati/contenutiHome";

function PlaceholderFoto() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100">

      {/* Elementi geometrici decorativi di sfondo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-blue-50/60" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-slate-200/40" />
        <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-slate-200" />
        <div className="absolute bottom-12 right-10 h-28 w-28 rounded-full border border-blue-100" />
        <div className="absolute bottom-6 right-6 h-14 w-14 rounded-full bg-blue-50/80" />
      </div>

      {/* Silhouette placeholder */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-300/70 shadow-inner">
          <svg
            viewBox="0 0 56 56"
            className="h-16 w-16 text-slate-400"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="28" cy="18" r="11" />
            <path d="M4 52c0-13.255 10.745-24 24-24s24 10.745 24 24" />
          </svg>
        </div>
        <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-400">
          Foto professionale
        </span>
      </div>
    </div>
  );
}

export default function SezioneProfilo() {
  const { sezione, titolo, ruolo, testo, secondoTesto, valori } = profilo;

  return (
    <section id="profilo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── Colonna sinistra: placeholder foto ── */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Cornici decorative sfalsate */}
              <div
                className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-blue-100"
                aria-hidden="true"
              />
              <div
                className="absolute -left-1.5 -top-1.5 h-full w-full rounded-2xl border border-slate-200"
                aria-hidden="true"
              />
              {/* Frame foto */}
              <div className="relative h-80 w-full lg:h-[440px]">
                <PlaceholderFoto />
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
