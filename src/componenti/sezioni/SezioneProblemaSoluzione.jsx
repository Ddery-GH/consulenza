import { XCircle, CheckCircle2 } from "lucide-react";
import { problemaSoluzione } from "../../dati/contenutiHome";

export default function SezioneProblemaSoluzione() {
  const { sezione, problema, soluzione } = problemaSoluzione;

  return (
    <section id="soluzione" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Etichetta sezione */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {sezione}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          {/* ── Blocco Problema ── */}
          <div className="flex flex-col rounded-2xl border border-orange-100 bg-orange-50/40 p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                <XCircle size={20} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {problema.titolo}
              </h3>
            </div>

            <p className="mb-8 leading-relaxed text-slate-600">
              {problema.testo}
            </p>

            <ul className="flex flex-col gap-3 mt-auto">
              {problema.punti.map((punto) => (
                <li
                  key={punto}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  {punto}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Blocco Soluzione ── */}
          <div className="flex flex-col rounded-2xl border border-blue-100 bg-blue-50/40 p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                <CheckCircle2 size={20} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {soluzione.titolo}
              </h3>
            </div>

            <p className="mb-8 leading-relaxed text-slate-600">
              {soluzione.testo}
            </p>

            <ul className="flex flex-col gap-3 mt-auto">
              {soluzione.punti.map((punto) => (
                <li
                  key={punto}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  {punto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
