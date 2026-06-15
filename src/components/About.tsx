import logoIcon from "../assets/engenheiro.png";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="sobre">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={logoIcon}
              alt="Mourão Engenharia"
              className="h-90 w-auto opacity-90"
            />
          </div>

          <div>
            <span className="font-medium text-[#103C7B]">
              Sobre o engenheiro
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Thalles Pereira Mourão
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Engenheiro Civil
            </p>

            <p className="font-medium text-[#103C7B]">
              CREA 32537/D-DF
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Especializado em vistorias e laudos técnicos,
              atuando na identificação de inconformidades,
              vícios construtivos e falhas de acabamento em
              imóveis residenciais.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              O objetivo é oferecer ao cliente segurança,
              respaldo técnico e documentação adequada para
              garantir uma entrega de imóvel mais tranquila.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}