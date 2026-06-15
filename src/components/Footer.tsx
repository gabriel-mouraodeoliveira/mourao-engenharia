import logo from "../assets/logo-mourao.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >
          <img
            src={logo}
            alt="Mourão Engenharia"
            className="h-24 w-auto"
          />

          <div className="text-center md:text-right">
            <p className="text-sm text-slate-600">
              CREA 32537/D-DF
            </p>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Mourão Engenharia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}