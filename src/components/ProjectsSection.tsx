import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Alle");

  const categories = [
    t("Alle", "All"),
    t("Wohnbau", "Residential"),
    t("Gewerbe", "Commercial"),
    t("Sanierung", "Renovation"),
    t("Innenausbau", "Interior"),
  ];

  const projects = [
    {
      id: 1,
      title: t("Mehrfamilienhaus Berlin-Mitte", "Apartment Building Berlin-Mitte"),
      category: t("Wohnbau", "Residential"),
      location: "Berlin",
      year: "2023",
      description: t(
        "Neubau eines 6-stöckigen Wohnhauses mit 24 Einheiten",
        "New construction of a 6-story residential building with 24 units"
      ),
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: t("Bürokomplex Frankfurt", "Office Complex Frankfurt"),
      category: t("Gewerbe", "Commercial"),
      location: "Frankfurt",
      year: "2023",
      description: t(
        "Modernes Bürogebäude mit nachhaltiger Bauweise",
        "Modern office building with sustainable construction"
      ),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: t("Altbausanierung München", "Historic Renovation Munich"),
      category: t("Sanierung", "Renovation"),
      location: "München",
      year: "2022",
      description: t(
        "Denkmalgerechte Komplettsanierung eines Gründerzeitbaus",
        "Heritage-compliant complete renovation of a historic building"
      ),
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: t("Loft-Ausbau Hamburg", "Loft Conversion Hamburg"),
      category: t("Innenausbau", "Interior"),
      location: "Hamburg",
      year: "2023",
      description: t(
        "Hochwertiger Innenausbau einer 200m² Loft-Wohnung",
        "High-quality interior finishing of a 200m² loft apartment"
      ),
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: t("Produktionshalle Köln", "Production Hall Cologne"),
      category: t("Gewerbe", "Commercial"),
      location: "Köln",
      year: "2022",
      description: t(
        "Industriehalle mit Bürotrakt und Sozialräumen",
        "Industrial hall with office wing and social facilities"
      ),
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: t("Einfamilienhaus Düsseldorf", "Single-Family Home Düsseldorf"),
      category: t("Wohnbau", "Residential"),
      location: "Düsseldorf",
      year: "2023",
      description: t(
        "Energieeffizienter Neubau im Passivhausstandard",
        "Energy-efficient new build to passive house standard"
      ),
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
  ];

  const allCategory = t("Alle", "All");
  const filteredProjects =
    activeCategory === allCategory
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding" id="projekte">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Referenzen", "Portfolio")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t("Unsere Projekte", "Our Projects")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Eine Auswahl erfolgreich abgeschlossener Bauprojekte aus verschiedenen Bereichen.",
              "A selection of successfully completed construction projects from various sectors."
            )}
          </p>
        </ScrollAnimationWrapper>

        {/* Category Filter */}
        <ScrollAnimationWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
