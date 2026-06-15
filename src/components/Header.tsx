import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-mourao.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200
        bg-white/95
        backdrop-blur-md
      "
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <a href="#">
          <img
            src={logo}
            alt="Mourão Engenharia"
            className="h-42 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                font-medium
                text-slate-600
                transition-colors
                hover:text-[#103C7B]
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}