import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Lock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";

const QuoteSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    t("Hochbau", "Building Construction"),
    t("Tiefbau", "Civil Engineering"),
    t("Renovierung", "Renovation"),
    t("Sanierung", "Restoration"),
    t("Innenausbau", "Interior Finishing"),
    t("Gewerbebau", "Commercial Construction"),
    t("Sonstiges", "Other"),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t("Anfrage erfolgreich gesendet!", "Request sent successfully!"),
      description: t(
        "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        "We will contact you within 24 hours."
      ),
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding" id="anfrage">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <ScrollAnimationWrapper direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("Kontaktieren Sie uns", "Contact Us")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              {t("Jetzt unverbindliches Angebot erhalten", "Get Your Free Quote Now")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t(
                "Beschreiben Sie Ihr Bauvorhaben und erhalten Sie eine kostenlose, unverbindliche Erstberatung. Wir melden uns zeitnah bei Ihnen.",
                "Describe your construction project and receive a free, no-obligation initial consultation. We will contact you promptly."
              )}
            </p>

            {/* Trust Points */}
            <div className="space-y-4">
              {[
                {
                  icon: Clock,
                  text: t("Antwort innerhalb von 24 Stunden", "Response within 24 hours"),
                },
                {
                  icon: CheckCircle,
                  text: t("Kostenlose & unverbindliche Beratung", "Free & non-binding consultation"),
                },
                {
                  icon: Lock,
                  text: t("DSGVO-konforme Datenverarbeitung", "GDPR-compliant data processing"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - Form */}
          <ScrollAnimationWrapper direction="right">
            <motion.div
              whileHover={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.4)" }}
              className="card-premium"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("Name", "Name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("Ihr vollständiger Name", "Your full name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {t("Telefon", "Phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("E-Mail", "Email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("ihre@email.de", "your@email.com")}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      {t("Standort / PLZ", "Location / ZIP")}
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("z.B. Berlin oder 10115", "e.g. Berlin or 10115")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    {t("Gewünschte Leistung", "Desired Service")}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">{t("Bitte auswählen...", "Please select...")}</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("Ihre Nachricht", "Your Message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={t(
                      "Beschreiben Sie kurz Ihr Bauvorhaben...",
                      "Briefly describe your construction project..."
                    )}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("Wird gesendet...", "Sending...")
                    ) : (
                      <>
                        {t("Anfrage absenden", "Submit Request")}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-muted-foreground text-center">
                  {t("Mit dem Absenden stimmen Sie unserer", "By submitting, you agree to our")}{" "}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    {t("Datenschutzerklärung", "Privacy Policy")}
                  </a>{" "}
                  {t("zu.", ".")}
                </p>
              </form>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
