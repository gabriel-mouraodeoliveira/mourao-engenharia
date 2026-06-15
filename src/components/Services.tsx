import {
  ClipboardCheck,
  FileText,
  SearchCheck,
  RefreshCcw,
} from "lucide-react";

import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";

const services = [
  {
    icon: ClipboardCheck,
    title: "Vistoria de Entrega",
    description:
      "Inspeção completa do imóvel antes da assinatura do recebimento.",
  },
  {
    icon: FileText,
    title: "Laudo Técnico",
    description:
      "Relatório detalhado com registros fotográficos e observações técnicas.",
  },
  {
    icon: SearchCheck,
    title: "Identificação de Vícios",
    description:
      "Mapeamento de falhas construtivas e problemas de acabamento.",
  },
  {
    icon: RefreshCcw,
    title: "Revisita Pós-Correção",
    description:
      "Verificação dos reparos executados pela construtora.",
  },
];

export function Services() {
  return (
    <Section id="servicos">
      <Container>
        <SectionTitle
          eyebrow="Serviços"
          title="Como podemos ajudar?"
          description="Atendimento especializado para garantir uma entrega segura do seu imóvel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <Icon
                  size={32}
                  className="mb-4 text-[#103C7B]"
                />

                <h3 className="mb-3 text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}