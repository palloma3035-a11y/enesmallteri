import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – BauPro GmbH</title>
        <meta name="description" content="Datenschutzerklärung der BauPro GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>

              <div className="prose prose-invert max-w-none space-y-8">
                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-xl font-semibold mb-2 mt-4">Allgemeine Hinweise</h3>
                  <p className="text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">2. Verantwortliche Stelle</h2>
                  <div className="text-muted-foreground space-y-2">
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p className="font-semibold text-foreground">BauPro GmbH</p>
                    <p>Musterstraße 123</p>
                    <p>10115 Berlin</p>
                    <p>Telefon: +49 (0) 30 123 456 78</p>
                    <p>E-Mail: datenschutz@baupro-gmbh.de</p>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete 
                    und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für 
                    die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                    Endgerät gespeichert.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 mt-4">Kontaktformular</h3>
                  <p className="text-muted-foreground">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                    wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">4. Ihre Rechte</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>Sie haben jederzeit das Recht:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                      <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                      <li>die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                      <li>Ihr Recht auf Datenübertragbarkeit auszuüben</li>
                      <li>sich bei einer Aufsichtsbehörde zu beschweren</li>
                    </ul>
                  </div>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">5. Analyse-Tools und Werbung</h2>
                  <p className="text-muted-foreground">
                    Diese Website nutzt keine Analyse-Tools oder Tracking-Dienste von Drittanbietern. 
                    Wir erfassen lediglich technisch notwendige Daten zur Bereitstellung unserer 
                    Dienstleistungen.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">6. SSL-/TLS-Verschlüsselung</h2>
                  <p className="text-muted-foreground">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                    Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                    SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                    dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem 
                    Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">7. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
                  <p className="text-muted-foreground">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                    Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
                    der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">8. Speicherdauer</h2>
                  <p className="text-muted-foreground">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                    wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                    Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
                    oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                    sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                    personenbezogenen Daten haben.
                  </p>
                </section>

                <section className="card-premium">
                  <h2 className="text-2xl font-bold mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
                  <p className="text-muted-foreground">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                    aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                    in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die 
                    neue Datenschutzerklärung.
                  </p>
                </section>

                <p className="text-sm text-muted-foreground mt-8">
                  Stand: Dezember 2024
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Datenschutz;
