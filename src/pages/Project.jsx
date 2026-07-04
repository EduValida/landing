import { architectureSection, projectSection, fundingSection } from "../content/landingContent";

export default function Project() {
  return (
    <div className="py-16 space-y-12">

      {/* problema & proposta  --> Temos que rever os textos e tal */}
      <section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="sticky top-28">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
              {projectSection.kicker}
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-snug">
              {projectSection.title}
            </h2>
            <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          <div className="space-y-5 text-[17px] leading-[1.85] text-slate-600">
            {projectSection.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem da arquitetura */}
      <section className="border-t border-slate-200 pt-12">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
            Arquitetura
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Arquitetura Conceitual
          </h2>
          <p className="mt-4 text-[17px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Visão geral dos componentes e fluxos da plataforma EduValida.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
          <img
            src="/arquitetura-conceitual.png"
            alt="Arquitetura Conceitual EduValida"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Estrutura e etc */}
      <section className="border-t border-slate-200 pt-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="sticky top-28">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
              {architectureSection.kicker}
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-snug">
              {architectureSection.title}
            </h2>
            <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {architectureSection.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-5">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-[16px] leading-[1.8] text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Financiadora */}

      <section className="border-t border-slate-200 pt-20">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
            {fundingSection.kicker}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 leading-snug">
            {fundingSection.title}
          </h2>
          <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        <div>
          {fundingSection.items.map((funder) => (
            <div key={funder.name} className="flex flex-col items-center gap-8 text-center">
              {funder.logo && (
                <img
                  src={funder.logo}
                  alt={`Logo ${funder.name}`}
                  className="h-48 w-auto object-contain"
                />
              )}
              <p className="text-[18px] font-bold leading-[1.85] text-slate-600 max-w-2xl">
                {funder.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
