import { roadmapSection } from "../content/landingContent";

export default function Roadmap() {
  return (
    <div className="py-16">

      {/* Header */}
      <div className="mb-3">
        <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
          {roadmapSection.kicker}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 leading-snug">
          {roadmapSection.title}
        </h1>
        <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
      </div>

      {/* Grid dos marcos */}
      <div className="grid gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden sm:grid-cols-2">
        {roadmapSection.items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 flex flex-col gap-4 hover:bg-blue-50 transition-colors duration-200"
          >
            {/* Númerozinho */}
            <span className="text-[56px] font-black leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Marco + número */}
            <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold -mt-2">
              Marco {String(index + 1).padStart(2, "0")}
            </p>

            {/* Descrição */}
            <p className="text-[17px] leading-[1.8] text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
