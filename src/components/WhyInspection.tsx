import {
  AlertTriangle,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";

const items = [
  {
    icon: AlertTriangle,
    title: "Problemas nem sempre são visíveis",
    description:
      "Falhas de acabamento, esquadrias desalinhadas, infiltrações e outras inconformidades podem passar despercebidas no momento da entrega.",
  },
  {
    icon: Wrench,
    title: "Corrigir depois pode ser mais difícil",
    description:
      "Identificar os problemas antes da assinatura facilita o processo de solicitação de reparos junto à construtora.",
  },
  {
    icon: ShieldCheck,
    title: "Receba com segurança",
    description:
      "Uma vistoria técnica garante mais tranquilidade e respaldo na hora de receber as chaves do seu imóvel.",
  },
];

export function WhyInspection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Antes da entrega"
          title="A vistoria é a sua oportunidade de identificar problemas antes de receber o imóvel."
          description="Uma análise técnica especializada ajuda a encontrar inconformidades que muitas vezes passam despercebidas durante a entrega."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <Icon
                  size={32}
                  className="mb-5 text-[#103C7B]"
                />

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}