import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-2xl"
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("Cookie-Einstellungen", "Cookie Settings")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu verbessern.",
                      "We use cookies to provide you with the best possible experience on our website. Some cookies are technically necessary, others help us improve the website."
                    )}{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      {t("Mehr erfahren", "Learn more")}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button variant="outline" size="sm" onClick={declineCookies}>
                  {t("Nur notwendige", "Essential only")}
                </Button>
                <Button variant="hero" size="sm" onClick={acceptCookies}>
                  {t("Alle akzeptieren", "Accept all")}
                </Button>
              </div>
              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground"
                aria-label={t("Schließen", "Close")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
