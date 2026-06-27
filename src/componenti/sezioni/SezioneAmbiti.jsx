import { BarChart2, TrendingUp, Layers, Map } from "lucide-react";
import { ambiti } from "../../dati/contenutiHome";

const iconeAmbiti = [BarChart2, TrendingUp, Layers, Map];

export default function SezioneAmbiti() {
  const { sezione, titolo, sottotitolo, card } = ambiti;

  return (
    <section id="ambiti" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Intestazione sezione */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {sezione}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            {titolo}
          </h2>
          <p className="leading-relaxed text-slate-600">{sottotitolo}</p>
        </div>

        {/* 4 card */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {card.map((item, index) => {
            const Icona = iconeAmbiti[index];
            return (
              <div
                key={item.titolo}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200/60 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                  <Icona size={18} />
                </div>
                <h3 className="mb-2.5 text-base font-bold text-slate-900">
                  {item.titolo}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.descrizione}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
