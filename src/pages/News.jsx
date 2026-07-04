import { newsSection } from "../content/landingContent";

function NewsItem({ item }) {
  return (
    <article className="grid gap-4 py-7 sm:grid-cols-[150px_1fr] sm:gap-8">
      <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold pt-1">
        {item.date}
      </p>

      <p className="text-[17px] leading-[1.85] text-slate-700">
        {item.text}
        {item.href && (
          <>
            {" "}
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-600"
            >
              {item.linkLabel || "Leia mais"}
            </a>
          </>
        )}
      </p>
    </article>
  );
}

export default function News() {
  const hasNews = newsSection.items.length > 0;

  return (
    <div className="py-16 space-y-12">
      <section>
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-600 font-semibold mb-3">
            {newsSection.kicker}
          </p>
          <h1 className="text-4xl font-bold text-slate-900 leading-snug">
            {newsSection.title}
          </h1>
          <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {hasNews ? (
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {newsSection.items.map((item, index) => (
              <NewsItem key={`${item.date}-${index}`} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-[20px] font-bold text-slate-900">
              {newsSection.emptyTitle}
            </p>
            <p className="mt-3 max-w-2xl text-[16px] leading-[1.8] text-slate-600">
              {newsSection.emptyDescription}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
