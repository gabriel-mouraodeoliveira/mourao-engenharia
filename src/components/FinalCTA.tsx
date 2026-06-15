import { ArrowRight } from "lucide-react";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function FinalCTA() {
  return (
    <Section className="bg-[#103C7B]">
      <Container>
        <div className="text-center">
          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            Vai receber seu imóvel?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-lg
              text-slate-200
            "
          >
            Agende sua vistoria e receba seu imóvel
            com mais segurança e respaldo técnico.
          </p>

          <a
            href="https://wa.me/5561986838241?text=Olá,%20gostaria%20de%20agendar%20uma%20vistoria."
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-6
              py-4
              font-medium
              text-[#103C7B]
              transition-all
              hover:scale-105
            "
          >
            Agendar Vistoria
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </Section>
  );
}