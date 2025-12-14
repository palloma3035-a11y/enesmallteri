import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum – BauPro GmbH</title>
        <meta name="description" content="Impressum der BauPro GmbH. Angaben gemäß § 5 TMG." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

              <div className="prose prose-invert max-w-none space-y-8">
                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-semibold text-foreground">BauPro GmbH</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Musterstraße 123, 10115 Berlin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+49 (0) 30 123 456 78</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>info@baupro-gmbh.de</span>
                    </div>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Vertreten durch</h2>
                  <p className="text-muted-foreground">
                    Geschäftsführer: Max Mustermann
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Eintragung im Handelsregister</p>
                    <p>Registergericht: Amtsgericht Berlin-Charlottenburg</p>
                    <p>Registernummer: HRB 123456 B</p>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 123456789
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Berufsbezeichnung: Bauunternehmer</p>
                    <p>Zuständige Kammer: Handwerkskammer Berlin</p>
                    <p>Verliehen in: Deutschland</p>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Max Mustermann</p>
                    <p>Musterstraße 123</p>
                    <p>10115 Berlin</p>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Streitschlichtung</h2>
                  <p className="text-muted-foreground">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
                    an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
                  <p className="text-muted-foreground">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                    den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                    jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                    oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
                  <p className="text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
                  <p className="text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                    des jeweiligen Autors bzw. Erstellers.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Impressum;
