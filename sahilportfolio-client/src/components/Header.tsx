import { site } from "@/data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#lab", label: "Lab" },
];

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#110720]/80 backdrop-blur-sm">
      <nav className="px-6 py-4">
        <div className="container mx-auto flex h-full max-w-6xl items-center justify-between">
            <a
            href="#home"
            className="font-script text-[32px] leading-none font-semibold text-white transition-colors hover:text-purple-400 sm:text-[40px]"
          >
            {site.name}
          </a>
          <ul className="m-0 flex list-none items-center gap-4 p-0 sm:gap-8">
            {links.map((link) => (
              <li key={link.href} className="m-0 p-0">
                <a
                  href={link.href}
                  className="text-sm font-normal text-white transition-colors hover:text-purple-400 sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
