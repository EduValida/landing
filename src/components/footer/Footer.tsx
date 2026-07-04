import { partnersSection, footerContent } from "../../content/landingContent";

export default function Footer() {

    return (
        
        <footer className="border-t border-slate-200 bg-slate-50/80">
            <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-lg text-slate-900 font-bold">{footerContent.title}</p>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                            {footerContent.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-5">
                        {partnersSection.items.map((partner) => (
                            <div key={partner.name} className="flex items-center justify-start">
                                <img
                                    src={partner.logo}
                                    alt={`Logo ${partner.name}`}
                                    className={`${partner.logoClassName} object-contain opacity-90`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
