import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../../content/landingContent";

export default function Header() {
    return (

        <header className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
 
            <Link to="/" className="navbar-container flex items-center w-36 h-16 hover:opacity-90 transition-opacity">
                <img className="navbar-logo" src="/logo-eduvalida-resized.png" alt="Logo EduValida" />
                <div className="navbar-title">
                    {/* <p className="text-[26px] tracking-[0.08em] text-white font-['Ubuntu'] font-bold ">EduValida</p> */}
                </div>
            </Link>
 
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] text-slate-600 sm:justify-end md:gap-8 md:text-[16px] font-bold">
                {navigationLinks.map((link) => (
                    <NavLink 
                        key={link.href} 
                        to={link.href} 
                        className={({ isActive }) => 
                            `relative py-2 transition-all duration-300 ease-in-out ` +
                            `after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ` +
                            (isActive 
                                ? "text-blue-600 after:w-full" 
                                : "text-slate-600 hover:text-blue-600 after:w-0 hover:after:w-full")
                        }
                    >
                        {link.label.toUpperCase()}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}
