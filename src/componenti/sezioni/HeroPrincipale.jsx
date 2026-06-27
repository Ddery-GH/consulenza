import { ArrowRight, ChevronDown } from "lucide-react";
import { hero, profilo } from "../../dati/contenutiHome";

function VisualAstratto() {
  return (
    <div className="relative w-full">
      {/* Card principale */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/60 lg:p-8">

        {/* Barra superiore stile finestra */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="h-2 w-20 rounded-full bg-slate-200" />
        </div>

        {/* SVG — mappa hub sportivo */}
        <div className="relative h-52 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
          <svg
            viewBox="0 0 380 200"
            className="h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            {/* Griglia di sfondo */}
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="380" height="200" fill="url(#smallGrid)" />

            {/* Linee di connessione */}
            <line
              x1="60"
              y1="100"
              x2="155"
              y2="55"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <line
              x1="60"
              y1="100"
              x2="155"
              y2="145"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <line
              x1="155"
              y1="55"
              x2="270"
              y2="100"
              stroke="#1D4ED8"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <line
              x1="155"
              y1="145"
              x2="270"
              y2="100"
              stroke="#1D4ED8"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <line
              x1="155"
              y1="55"
              x2="155"
              y2="145"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeDasharray="4 5"
            />

            {/* Nodo sinistro — Ente sportivo */}
            <circle
              cx="60"
              cy="100"
              r="24"
              fill="white"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            <circle cx="60" cy="100" r="9" fill="#94A3B8" opacity="0.6" />
            <text
              x="60"
              y="136"
              textAnchor="middle"
              fontSize="9"
              fill="#94A3B8"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              Ente sportivo
            </text>

            {/* Nodo centro-alto — RASD */}
            <circle
              cx="155"
              cy="55"
              r="20"
              fill="white"
              stroke="#1D4ED8"
              strokeWidth="1.5"
            />
            <circle cx="155" cy="55" r="7" fill="#1D4ED8" opacity="0.8" />
            <text
              x="155"
              y="36"
              textAnchor="middle"
              fontSize="9"
              fill="#1D4ED8"
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
            >
              RASD
            </text>

            {/* Nodo centro-basso — Normativa */}
            <circle
              cx="155"
              cy="145"
              r="20"
              fill="white"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <circle cx="155" cy="145" r="7" fill="#475569" opacity="0.5" />
            <text
              x="155"
              y="176"
              textAnchor="middle"
              fontSize="9"
              fill="#475569"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              Normativa
            </text>

            {/* Nodo destro — Gestione */}
            <circle cx="270" cy="100" r="28" fill="#1D4ED8" opacity="0.08" />
            <circle
              cx="270"
              cy="100"
              r="22"
              fill="#1D4ED8"
              opacity="0.12"
            />
            <circle cx="270" cy="100" r="14" fill="#1D4ED8" />
            <circle cx="270" cy="100" r="5" fill="white" />
            <text
              x="270"
              y="136"
              textAnchor="middle"
              fontSize="9"
              fill="#1D4ED8"
              fontFamily="system-ui, sans-serif"
              fontWeight="700"
            >
              Gestione
            </text>

            {/* Elementi decorativi angoli */}
            <rect
              x="310"
              y="16"
              width="52"
              height="32"
              rx="6"
              fill="white"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <rect
              x="318"
              y="24"
              width="22"
              height="4"
              rx="2"
              fill="#1D4ED8"
              opacity="0.6"
            />
            <rect
              x="318"
              y="32"
              width="36"
              height="3"
              rx="1.5"
              fill="#E2E8F0"
            />

            <rect
              x="14"
              y="152"
              width="52"
              height="32"
              rx="6"
              fill="white"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <rect
              x="22"
              y="160"
              width="22"
              height="4"
              rx="2"
              fill="#0EA5E9"
              opacity="0.6"
            />
            <rect
              x="22"
              y="168"
              width="36"
              height="3"
              rx="1.5"
              fill="#E2E8F0"
            />
          </svg>
        </div>

        {/* Metriche inferiori */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <div className="text-xs font-medium text-slate-500">RASD</div>
            <div className="mt-0.5 text-sm font-bold text-slate-900">
              Conforme
            </div>
          </div>
          <div className="rounded-xl border border-blue-200/60 bg-blue-50 p-3 text-center">
            <div className="text-xs font-semibold text-blue-700">Gestione</div>
            <div className="mt-0.5 text-sm font-bold text-slate-900">
              Strutturata
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <div className="text-xs font-medium text-slate-500">Bandi</div>
            <div className="mt-0.5 text-sm font-bold text-sky-600">
              Aggiornati
            </div>
          </div>
        </div>
      </div>

      {/* Badge flottante */}
      <div className="absolute -top-4 -right-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-200/80 xl:block">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-slate-900">
            Sport Management
          </span>
        </div>
      </div>

      {/* Elementi blur decorativi */}
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-blue-100/40 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-sky-100/30 blur-2xl"
        aria-hidden="true"
      />
    </div>
  );
}

export default function HeroPrincipale() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 xl:py-28">

      {/* Griglia di sfondo sottilissima */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* Blur decorativi */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-100/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── Colonna sinistra: testo ── */}
          <div className="flex flex-col items-start gap-6">

            {/* Etichetta sopratitolo */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              {hero.sopraTitolo}
            </span>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl xl:text-[3.25rem] xl:leading-[1.15]">
              {hero.titolo}
            </h1>

            {/* Divisore brand */}
            <div className="h-px w-10 bg-blue-700" />

            {/* Sottotitolo */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              {hero.sottotitolo}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                {hero.ctaPrimaria}
                <ArrowRight size={16} />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                {hero.ctaSecondaria}
                <ChevronDown size={16} className="text-slate-500" />
              </a>
            </div>

            {/* Micro punti */}
            {hero.microPunti && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {hero.microPunti.map((punto) => (
                  <span
                    key={punto}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                    {punto}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Colonna destra: profilo + visual ── */}
          <div className="flex flex-col gap-5">

            {/* Card profilo verticale */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Foto full-width */}
              <div className="h-[260px] w-full overflow-hidden">
                <img
                  src="/immagini/enrico-badge.jpg"
                  alt="Enrico Di Prisco"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
              </div>
              {/* Nome, ruolo e chip */}
              <div className="p-4">
                <div className="mb-3">
                  <span className="block text-base font-bold text-slate-900">Enrico Di Prisco</span>
                  <span className="mt-0.5 block text-sm leading-snug text-slate-500">{profilo.ruolo}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-blue-700">{profilo.sottoRuolo}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {hero.chipAutorevolezza.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual astratto */}
            <div className="w-full">
              <VisualAstratto />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
