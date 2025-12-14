import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Thomas Müller",
      role: t(
        "Geschäftsführer, Müller Immobilien GmbH",
        "Managing Director, Müller Real Estate GmbH"
      ),
      location: "München",
      content: t(
        "Hervorragende Zusammenarbeit von der ersten Beratung bis zur Schlüsselübergabe. Termine wurden eingehalten, die Kommunikation war transparent und das Ergebnis übertrifft unsere Erwartungen. Absolut empfehlenswert.",
        "Excellent collaboration from initial consultation to key handover. Deadlines were met, communication was transparent, and the result exceeds our expectations. Highly recommended."
      ),
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Andrea Schmidt",
      role: t(
        "Projektleiterin, Schmidt & Partner Architekten",
        "Project Manager, Schmidt & Partner Architects"
      ),
      location: "Berlin",
      content: t(
        "Wir arbeiten seit Jahren mit diesem Bauunternehmen zusammen. Die Qualität der Ausführung und die Zuverlässigkeit sind beispielhaft. Auch bei komplexen Sanierungsprojekten behält das Team den Überblick.",
        "We have worked with this construction company for years. The quality of execution and reliability are exemplary. Even with complex renovation projects, the team maintains oversight."
      ),
      rating: 5,
    },
    {
      id: 3,
      name: "Klaus Weber",
      role: t("Eigentümer Wohnanlage", "Property Owner"),
      location: "Hamburg",
      content: t(
        "Nach der Komplettsanierung unserer Wohnanlage können wir nur Positives berichten: professionelle Abwicklung, faire Preise und ein Team, das mitdenkt. Die Mieter sind begeistert.",
        "After the complete renovation of our residential complex, we can only report positive things: professional handling, fair prices, and a team that thinks ahead. The tenants are thrilled."
      ),
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Kundenstimmen", "Testimonials")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t("Das sagen unsere Kunden", "What Our Clients Say")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Vertrauen entsteht durch Qualität und Zuverlässigkeit – unsere Kunden bestätigen das.",
              "Trust is built through quality and reliability – our clients confirm this."
            )}
          </p>
        </ScrollAnimationWrapper>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-premium relative h-full"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg"
                >
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary mt-1">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
