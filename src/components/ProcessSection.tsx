import { ClipboardCheck, FileCheck, HardHat, Handshake, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: t("Beratung & Planung", "Consultation & Planning"),
      description: t(
        "Persönliche Erstberatung vor Ort. Wir erfassen Ihre Anforderungen, analysieren die Gegebenheiten und entwickeln ein maßgeschneidertes Konzept.",
        "Personal on-site consultation. We capture your requirements, analyze conditions, and develop a customized concept."
      ),
    },
    {
      icon: FileCheck,
      number: "02",
      title: t("Angebot & Vertragsprüfung", "Quote & Contract Review"),
      description: t(
        "Transparente Kostenaufstellung nach VOB. Detailliertes Leistungsverzeichnis und faire Vertragsbedingungen für volle Planungssicherheit.",
        "Transparent cost breakdown according to VOB. Detailed specifications and fair contract terms for full planning security."
      ),
    },
    {
      icon: ClipboardCheck,
      number: "03",
      title: t("Projektvorbereitung", "Project Preparation"),
      description: t(
        "Koordination aller Gewerke, Genehmigungsverfahren und Terminplanung. Professionelles Projektmanagement von Anfang an.",
        "Coordination of all trades, permits, and scheduling. Professional project management from the start."
      ),
    },
    {
      icon: HardHat,
      number: "04",
      title: t("Bauausführung & Qualitätskontrolle", "Construction & Quality Control"),
      description: t(
        "Fachgerechte Umsetzung mit regelmäßigen Baustellenbesprechungen. Laufende Qualitätssicherung nach DIN-Standards.",
        "Professional execution with regular site meetings. Ongoing quality assurance to DIN standards."
      ),
    },
    {
      icon: Handshake,
      number: "05",
      title: t("Übergabe & Nachbetreuung", "Handover & Aftercare"),
      description: t(
        "Sorgfältige Endabnahme, vollständige Dokumentation und persönliche Einweisung. Wir bleiben auch danach Ihr Ansprechpartner.",
        "Careful final acceptance, complete documentation, and personal instruction. We remain your contact afterward."
      ),
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border overflow-hidden" id="ablauf">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Unser Ablauf", "Our Process")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t("Vom Konzept zur Fertigstellung", "From Concept to Completion")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Ein strukturierter Prozess garantiert Transparenz, Qualität und Termintreue – bei jedem Projekt.",
              "A structured process guarantees transparency, quality, and punctuality – on every project."
            )}
          </p>
        </ScrollAnimationWrapper>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full"
                >
                  <div className="card-premium text-center h-full">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 400 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg"
                    >
                      {index + 1}
                    </motion.div>

                    <div className="pt-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4"
                      >
                        <step.icon className="w-8 h-8 text-primary" />
                      </motion.div>

                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
