import React from "react";

export default function Impressum() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p>RUTZ Abschleppdienst 24/7</p>
        <p>Inhaber: Tolga</p>
        <p>Haydnstraße</p>
        <p>44649 Herne, Deutschland</p>
        <p>Umsatzsteuer-ID: DE179968875</p>
        <p>Registergericht: Amtsgericht Recklinghausen HRA 2334</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Telefon: +49 155 663 00110</p>
        <p>E-Mail: rutz-abschleppdienst@outlook.de</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Haftungshinweis</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir nehmen an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teil. Zuständig ist die
          Universalschlichtungsstelle des Zentrums für Schlichtung e.V.,
          Straßburger Straße 8, 77694 Kehl am Rhein (
          <a
            href="https://www.verbraucher-schlichter.de"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.verbraucher-schlichter.de
          </a>
          ).
        </p>
      </section>
    </div>
  );
}
