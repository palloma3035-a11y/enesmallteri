import { Building, Construction, Home, Landmark, PenTool, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building,
      title: t("Hochbau", "Building Construction"),
      description: t(
        "Schlüsselfertige Wohn- und Geschäftsgebäude nach höchsten deutschen Baustandards. Von der Planung bis zur Übergabe.",
        "Turnkey residential and commercial buildings to the highest German construction standards. From planning to handover."
      ),
    },
    {
      icon: Construction,
      title: t("Tiefbau", "Civil Engineering"),
      description: t(
        "Professionelle Erdarbeiten, Kanalisationen und Fundamentarbeiten. Präzise Ausführung für stabile Grundlagen.",
        "Professional earthworks, sewerage, and foundation work. Precise execution for stable foundations."
      ),
    },
    {
      icon: Home,
      title: t("Renovierung & Sanierung", "Renovation & Restoration"),
      description: t(
        "Fachgerechte Modernisierung von Bestandsbauten. Energetische Sanierung und denkmalgerechte Restaurierung.",
        "Professional modernization of existing buildings. Energy-efficient renovation and heritage-compliant restoration."
      ),
    },
    {
      icon: PenTool,
      title: t("Innenausbau", "Interior Finishing"),
      description: t(
        "Hochwertiger Trockenbau, Fliesen-, Maler- und Bodenarbeiten. Individuelle Raumgestaltung nach Ihren Wünschen.",
        "High-quality drywall, tiling, painting, and flooring. Custom interior design according to your wishes."
      ),
    },
    {
      icon: Landmark,
      title: t("Gewerbebau", "Commercial Construction"),
      description: t(
        "Industriehallen, Bürogebäude und Lagerflächen. Funktionale Architektur für Ihr Unternehmenswachstum.",
        "Industrial halls, office buildings, and warehouse spaces. Functional architecture for your business growth."
      ),
    },
    {
      icon: Wrench,
      title: t("Wartung & Service", "Maintenance & Service"),
      description: t(
        "Langfristige Betreuung Ihrer Immobilie. Regelmäßige Inspektionen und schnelle Instandsetzung.",
        "Long-term care for your property. Regular inspections and quick repairs."
      ),
    },
  ];

  return (
    <section className="section-padding" id="leistungen">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Unsere Leistungen", "Our Services")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t("Komplettlösungen für Ihr Bauprojekt", "Complete Solutions for Your Project")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Von der ersten Idee bis zur finalen Abnahme bieten wir alle Leistungen aus einer Hand – termingerecht und DIN-konform.",
              "From the first idea to final acceptance, we offer all services from a single source – on time and DIN-compliant."
            )}
          </p>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={index}
              delay={index * 0.08}
              direction={index % 2 === 0 ? "up" : "up"}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-premium group cursor-pointer h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                  >
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-primary font-medium text-sm group-hover:underline">
                    {t("Mehr erfahren", "Learn more")} →
                  </span>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
