import { ArrowRight, MessageCircle } from "lucide-react";
import logoIcon from "../assets/logo_mourao_transparente.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span
              className="
                inline-flex
                rounded-full
                bg-[#103C7B]/10
                px-4
                py-2
                text-sm
                font-medium
                text-[#103C7B]
              "
            >
              CREA 32537/D-DF
            </span>

            <h1
              className="
                mt-6
                text-5xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                md:text-6xl
              "
            >
              Receba seu imóvel com segurança e respaldo técnico.
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Identificamos vícios construtivos, falhas de acabamento
              e inconformidades antes da entrega definitiva do imóvel.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5561986838241?text=Olá,%20gostaria%20de%20agendar%20uma%20vistoria."
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#103C7B]
                  px-6
                  py-4
                  font-medium
                  text-white
                  transition-all
                  hover:bg-[#082A59]
                "
              >
                Agendar Vistoria
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/5561986838241"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  px-6
                  py-4
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-slate-50
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">

            <div
              className="
                absolute
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#103C7B]/5
                blur-3xl
              "
            />

            <img
              src={logoIcon}
              alt=""
              className="
                absolute
                h-[420px]
                w-auto
                opacity-[0.04]
                translate-x-6
                translate-y-6
                select-none
                pointer-events-none
              "
            />

            <img
              src={logoIcon}
              alt=""
              className="
                relative
                h-[420px]
                w-auto
                opacity-[0.22]
                select-none
                pointer-events-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}