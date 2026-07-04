import { useCasesSection } from "../content/landingContent";

export default function UseCases() {
  return (
    <div className="py-16 space-y-16">

      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
          {useCasesSection.kicker}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 leading-snug max-w-2xl">
          {useCasesSection.title}
        </h1>
        <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
      </div>

      {/* Itens */}
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {useCasesSection.items.map((item, index) => (
          <article
            key={item.title}
            className="grid gap-8 py-10 lg:grid-cols-[120px_1fr_1.6fr] items-start"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold pt-1">
              0{index + 1}
            </p>
            <h2 className="text-[22px] font-bold text-slate-900 leading-snug">
              {item.title}
            </h2>
            <p className="text-[17px] leading-[1.85] text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>

    </div>
  );
}
