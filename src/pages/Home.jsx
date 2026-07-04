import { Link } from "react-router-dom";
import { heroContent, valueSections } from "../content/landingContent";

export default function Home() {
  return (
    <div>
      <div className="grid py-16 min-h-[700px] w-full items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-slate-900 sm:text-6xl font-bold">
            {heroContent.title}
          </h1>

          <p className="font-bold text-[20px] mt-8 max-w-2xl leading-8 text-slate-600">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={heroContent.primaryCta.href}
              className="flex items-center justify-center border text-[22px] w-[240px] h-[80px]
              border-blue-600 bg-blue-600 font-semibold text-white hover:bg-blue-700
              transition-all duration-300 shadow-sm rounded-lg"
            >
              {heroContent.primaryCta.label}
            </Link>

            <Link
              to={heroContent.secondaryCta.href}
              className="flex items-center justify-center border text-[22px] w-[240px] h-[80px]
              border-slate-300 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600
              transition-all duration-300 bg-white shadow-sm rounded-lg"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <img
            src="/microcert.png"
            alt="Microcertificação EduValida"
            className="w-[520px] max-w-full h-auto object-contain"
          />
        </div>
      </div>

      <section className="py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-24 lg:grid-cols-2">
            {valueSections.map((section) => (
              <div key={section.title}>
                <p className="section-kicker text-[16px]">{section.kicker}</p>
                <h2 className="section-title text-[32px]">{section.title}</h2>
                <ul className="mt-8 space-y-2 text-sm leading-7 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[18px]">
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
