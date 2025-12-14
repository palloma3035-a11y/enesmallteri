import { Award, Building2, CheckCircle2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const TrustSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      value: "25+",
      label: t("Jahre Erfahrung", "Years Experience"),
      description: t("Kompetenz seit 1999", "Expertise since 1999"),
    },
    {
      icon: Building2,
      value: "300+",
      label: t("Abgeschlossene Projekte", "Completed Projects"),
      description: t("Wohn- und Gewerbebau", "Residential & Commercial"),
    },
    {
      icon: Users,
      value: "100%",
      label: t("Kundenzufriedenheit", "Client Satisfaction"),
      description: t("Nachweisbare Qualität", "Proven Quality"),
    },
    {
      icon: CheckCircle2,
      value: "DIN/VOB",
      label: t("Konforme Ausführung", "Compliant Execution"),
      description: t("Deutsche Standards", "German Standards"),
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Vertrauen & Erfahrung", "Trust & Experience")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t("Warum Kunden uns vertrauen", "Why Clients Trust Us")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle. Das bestätigen unsere Zahlen.",
              "Quality, reliability, and customer satisfaction are our top priorities. Our numbers confirm this."
            )}
          </p>
        </ScrollAnimationWrapper>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-premium text-center group h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="text-4xl md:text-5xl font-extrabold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
