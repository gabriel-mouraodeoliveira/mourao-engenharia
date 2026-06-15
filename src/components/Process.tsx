import {
  Calendar,
  ClipboardCheck,
  Camera,
  FileText,
  CheckCircle2,
} from "lucide-react";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  {
    icon: Calendar,
    title: "Agendamento",
    description:
      "Definimos a data da vistoria conforme a entrega do imóvel.",
  },
  {
    icon: ClipboardCheck,
    title: "Vistoria",
    description:
      "Inspeção técnica detalhada de todos os ambientes.",
  },
  {
    icon: Camera,
    title: "Registro Fotográfico",
    description:
      "Documentação completa das inconformidades encontradas.",
  },
  {
    icon: FileText,
    title: "Laudo Técnico",
    description:
      "Elaboração do relatório técnico com todas as observações.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega",
    description:
      "Documento pronto para apresentação à construtora.",
  },
];

export function Process() {
  return (
    <Section id="processo" className="bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Processo"
          title="Como funciona a vistoria?"
          description="Um processo simples, transparente e totalmente focado na segurança do cliente."
        />

        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative text-center"
              >
                <div
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#103C7B]
                    text-white
                  "
                >
                  <Icon size={28} />
                </div>

                <span
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#103C7B]
                  "
                >
                  Etapa {index + 1}
                </span>

                <h3 className="mb-2 font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}