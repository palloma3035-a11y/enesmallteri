import { Award, HardHat, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import ParallaxSection from "./ParallaxSection";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("Sicherheit & Compliance", "Safety & Compliance"),
      description: t(
        "Zertifizierte Arbeitssicherheit, DSGVO-konforme Prozesse und Versicherungsschutz auf höchstem Niveau.",
        "Certified workplace safety, GDPR-compliant processes, and top-level insurance coverage."
      ),
    },
    {
      icon: Award,
      title: t("Qualitätsstandards", "Quality Standards"),
      description: t(
        "Alle Arbeiten nach DIN-Normen und VOB-Richtlinien. Dokumentierte Qualitätssicherung bei jedem Projekt.",
        "All work according to DIN standards and VOB guidelines. Documented quality assurance on every project."
      ),
    },
    {
      icon: Users,
      title: t("Qualifiziertes Team", "Qualified Team"),
      description: t(
        "Erfahrene Bauleiter, Meister und Facharbeiter mit regelmäßigen Weiterbildungen.",
        "Experienced site managers, master craftsmen, and skilled workers with regular training."
      ),
    },
    {
      icon: HardHat,
      title: t("Moderne Ausstattung", "Modern Equipment"),
      description: t(
        "Zeitgemäßer Maschinenpark und digitale Projektsteuerung für effiziente Bauabläufe.",
        "State-of-the-art machinery and digital project management for efficient construction processes."
      ),
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border overflow-hidden" id="ueber-uns">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <ScrollAnimationWrapper direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("Über uns", "About Us")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              {t("Ihr zuverlässiger Partner am Bau", "Your Reliable Construction Partner")}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t(
                "Seit über 25 Jahren realisieren wir Bauprojekte in ganz Deutschland – von privaten Wohnhäusern bis zu großen Gewerbeobjekten. Unser Anspruch: höchste Qualität, absolute Termintreue und transparente Kommunikation.",
                "For over 25 years, we have been delivering construction projects throughout Germany – from private residential homes to large commercial properties. Our commitment: highest quality, absolute punctuality, and transparent communication."
              )}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                "Als inhabergeführtes Unternehmen stehen wir persönlich für jedes Projekt ein. Unsere Kunden schätzen die direkte Ansprechbarkeit, die fachliche Kompetenz und unsere Zuverlässigkeit – auch nach der Fertigstellung.",
                "As an owner-managed company, we personally stand behind every project. Our clients appreciate the direct accessibility, professional expertise, and our reliability – even after completion."
              )}
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {["ISO 9001", "VOB-konform", "DSGVO-konform"].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-card border border-border"
                >
                  <span className="text-sm font-medium">
                    {cert} {t("zertifiziert", "certified")}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - Values Grid */}
          <ParallaxSection speed={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-premium h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4"
                    >
                      <value.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
