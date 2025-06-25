import React from "react";
import leistungen1 from "../assets/leistungen1.jpg";
import leistungen2 from "../assets/leistungen2.jpg";
import leistungen3 from "../assets/leistungen3.jpg";
import leistungen4 from "../assets/leistungen4.jpg";

const Leistungen = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Unser Angebot</h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <img
            src={leistungen1}
            alt="Technicians Installing Photovoltaic Solar Panels"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Photovoltaik Anlagen</h3>
          <p className="text-gray-500 ">
            Im Bereich der Photovoltaik sind wir Elektriker darauf
            spezialisiert, PV-Anlagen fachgerecht zu planen, zu installieren und
            zu warten. Unsere Aufgaben umfassen die Montage von Solarpanelen,
            die Verkabelung des Systems und die Inbetriebnahme. Durch unsere
            Expertise tragen wir dazu bei, saubere und erneuerbare Energie aus
            Sonnenlicht zu erzeugen und damit einen Beitrag zur Nachhaltigkeit
            und zur Reduzierung der CO2-Emissionen zu leisten
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={leistungen2}
            alt="Automatic Fire Sprinkler System Installation"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">
            Mess-, Steuerungs- und <br /> Regelungstechnik
          </h3>
          <p className="text-gray-500">
            Im Bereich der Mess-, Steuer- und Regelungstechnik sind wir als
            Elektriker für die professionelle Planung, Installation und Wartung
            von Systemen zuständig. Unsere Expertise liegt darin, Sensoren,
            Aktoren und Steuerungskomponenten in industriellen Umgebungen
            effektiv einzusetzen. Durch die sorgfältige Integration dieser
            Elemente gewährleisten wir nicht nur die kontinuierliche Überwachung
            und Steuerung von Prozessen, sondern auch die Anpassung an
            wechselnde Betriebsanforderungen. Dies trägt zur Verbesserung der
            Produktionsqualität, zur Effizienzsteigerung und zur
            Energieeinsparung bei, wodurch Unternehmen ihre Betriebskosten
            reduzieren und gleichzeitig die Nachhaltigkeit fördern können.
            Unsere Arbeit in der MSR-Technik spielt somit eine entscheidende
            Rolle in der Optimierung industrieller Abläufe und in der Erreichung
            betrieblicher Ziele.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={leistungen3}
            alt="High Voltage Electrical Maintenance"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Installation</h3>
          <p className="text-gray-500">
            Wir bieten professionelle Elektroinstallationen für Wohn- und
            Geschäftsräume, Schaltanlagen, Beleuchtungssysteme,
            Sicherheitssysteme, Telefonanlagen und Netzwerke. Unsere erfahrenen
            Elektriker arbeiten schnell und effizient, um Ihre Projekte
            pünktlich und innerhalb Ihres Budgets abzuschließen. Wir bieten
            maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen und
            garantieren höchste Qualität.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={leistungen4}
            alt="Service Engineer Checking Electrical Switch"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Geräteprüfung</h3>
          <p className="text-gray-500">
            In unserem Fachgebiet sind wir Experten für die sorgfältige Prüfung
            elektrischer Geräte und Maschinen gemäß den relevanten Normen,
            einschließlich DIN VDE 0701, DIN VDE 0702, DIN VDE 0100-600 und DIN
            VDE 0105-100. Unsere Leidenschaft für elektrische Sicherheit
            spiegelt sich in unserer akribischen Arbeit wider. Unsere
            Dienstleistung konzentriert sich darauf, elektrische Ausrüstungen zu
            inspizieren und sicherzustellen, dass sie den höchsten
            Sicherheitsstandards entsprechen. Wir gehen in jedem Detail auf und
            prüfen jedes Element, um sicherzustellen, dass Ihre Geräte und
            Maschinen einwandfrei und sicher funktionieren. Unser Team verfügt
            über umfassende Erfahrung und Know-how, um sicherzustellen, dass
            Ihre elektrischen Anlagen den Normen entsprechen und Ihre Sicherheit
            gewährleistet ist. Wir sind stolz darauf, eine wichtige Rolle dabei
            zu spielen, die Zuverlässigkeit Ihrer elektrischen Ausrüstung zu
            gewährleisten und Ihnen den Frieden des Geistes zu geben, den Sie
            verdienen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leistungen;
