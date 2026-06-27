import { ArrowRight } from "lucide-react";
import { ctaFinale } from "../../dati/contenutiHome";

export default function SezioneCtaFinale() {
  const { titolo, testo, cta } = ctaFinale;

  return (
    <section id="contatti" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 px-8 py-14 text-center shadow-sm lg:px-14">

          {/* Icona decorativa */}
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200/60 bg-blue-50">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-700">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>

          {/* Titolo */}
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
            {titolo}
          </h2>

          {/* Testo */}
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-slate-600">
            {testo}
          </p>

          {/* CTA */}
          <a
            href="mailto:info@enricodiprisco.it"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
