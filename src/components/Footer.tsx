import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    { label: t("Hochbau", "Building Construction"), href: "#leistungen" },
    { label: t("Tiefbau", "Civil Engineering"), href: "#leistungen" },
    { label: t("Renovierung & Sanierung", "Renovation & Restoration"), href: "#leistungen" },
    { label: t("Innenausbau", "Interior Finishing"), href: "#leistungen" },
    { label: t("Gewerbebau", "Commercial Construction"), href: "#leistungen" },
  ];

  const companyLinks = [
    { label: t("Über uns", "About Us"), href: "#ueber-uns" },
    { label: t("Referenzen", "Portfolio"), href: "#projekte" },
    { label: t("Unser Ablauf", "Our Process"), href: "#ablauf" },
    { label: t("Kontakt", "Contact"), href: "#anfrage" },
    { label: t("Karriere", "Careers"), href: "/karriere" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <ScrollAnimationWrapper delay={0}>
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">BauPro GmbH</span>
              </motion.div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(
                  "Ihr zuverlässiger Partner für Hochbau, Tiefbau, Renovierung und Innenausbau in Deutschland.",
                  "Your reliable partner for construction, civil engineering, renovation, and interior finishing in Germany."
                )}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Musterstraße 123, 10115 Berlin
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  +49 (0) 30 123 456 78
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  info@baupro-gmbh.de
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Leistungen */}
          <ScrollAnimationWrapper delay={0.1}>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("Leistungen", "Services")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {serviceLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Unternehmen */}
          <ScrollAnimationWrapper delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("Unternehmen", "Company")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Öffnungszeiten */}
          <ScrollAnimationWrapper delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("Öffnungszeiten", "Business Hours")}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t("Montag - Freitag", "Monday - Friday")}</span>
                  <span className="text-foreground">07:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Samstag", "Saturday")}</span>
                  <span className="text-foreground">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("Sonntag", "Sunday")}</span>
                  <span className="text-foreground">{t("Geschlossen", "Closed")}</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20"
              >
                <p className="text-sm text-foreground">
                  <strong>{t("Notdienst:", "Emergency Service:")}</strong>{" "}
                  {t(
                    "Bei dringenden Bauanfragen erreichen Sie uns auch außerhalb der Geschäftszeiten.",
                    "For urgent construction inquiries, you can reach us outside of business hours."
                  )}
                </p>
              </motion.div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BauPro GmbH. {t("Alle Rechte vorbehalten.", "All rights reserved.")} | {t("Erstellt von", "Created by")}{" "}
              <a 
                href="https://enestahiri.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                enestahiri.com
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/impressum"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t("Impressum", "Legal Notice")}
              </a>
              <a
                href="/datenschutz"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t("Datenschutzerklärung", "Privacy Policy")}
              </a>
              <a
                href="#anfrage"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t("Kontakt", "Contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
