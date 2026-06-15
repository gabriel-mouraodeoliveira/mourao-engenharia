import {
  MessageCircle,
  Mail,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";

const contacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(61) 98683-8241",
    link: "https://wa.me/5561986838241",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@mouraoengenharia.com.br",
    link: "mailto:contato@mouraoengenharia.com.br",
  },
  {
    icon: MapPin,
    title: "Atendimento",
    value: "Brasília - DF",
    link: "#",
  },
  {
    icon: BadgeCheck,
    title: "CREA",
    value: "32537/D-DF",
    link: "#",
  },
];

export function Contact() {
  return (
    <Section id="contato" className="bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Entre em contato para agendar sua vistoria ou esclarecer dúvidas."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <Icon
                  size={32}
                  className="mb-4 text-[#103C7B]"
                />

                <h3 className="mb-2 text-lg font-semibold">
                  {item.title}
                </h3>

                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                        break-words
                        overflow-hidden
                        text-slate-600
                        transition-colors
                        hover:text-[#103C7B]
                    "
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-600">
                    {item.value}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}