import { teamSection, partnersSection } from "../content/landingContent";

function PhotoPlaceholder({ name }) {
  const initials = name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 text-blue-600 text-2xl font-bold">
      {initials}
    </div>
  );
}

function PersonCard({ person }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PhotoPlaceholder name={person.name} />
        )}
      </div>

      <div className="p-6">
        <p className="mb-2 max-w-full text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-blue-600">
          {person.role}
        </p>
        <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-slate-500 font-medium">{person.org}</p>
        {person.lattesUrl && (
          <div className="pt-5">
            <a
              href={person.lattesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              Currículo Lattes
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <div className="py-16 space-y-12">

      {/* Equipe */}
      <section>
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
            {teamSection.kicker}
          </p>
          <h1 className="text-4xl font-bold text-slate-900 leading-snug">
            {teamSection.title}
          </h1>
          <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamSection.items.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Parceiras */}
      <section className="border-t border-slate-200 pt-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
            {partnersSection.kicker}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 leading-snug">
            {partnersSection.title}
          </h2>
          <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {partnersSection.items.map((partner, index) => {
            const isLastOdd =
              partnersSection.items.length % 2 !== 0 &&
              index === partnersSection.items.length - 1;

            return (
              <article
                key={partner.name}
                className={`flex gap-6 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${
                  isLastOdd ? "sm:col-span-2 sm:w-[calc(50%-12px)] sm:mx-auto w-full" : ""
                }`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className={`${partner.logoClassName} object-contain`}
                  />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-slate-900">{partner.name}</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-slate-600">
                    {partner.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      
    </div>
  );
}
