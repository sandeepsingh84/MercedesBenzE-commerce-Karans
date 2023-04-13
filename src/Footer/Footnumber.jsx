import React from "react";

const Footnumber = () => {
  return (
    <div className="h-[1150px] bg-black text-gray-300 p-28">
      <div className=" border-t">
        <div
          className="flex gap-8 items-center p-5
mt-5 "
        >
          {/* 1para */}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-activity"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
              />
            </svg>
            <p> Stromverbrauch kombiniert²</p>
          </div>

          {/* 2para */}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-fuel-pump"
              viewBox="0 0 16 16"
            >
              <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z" />
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z" />
            </svg>

            <p>Kraftstoffverbrauch kombiniert¹ ²</p>
          </div>

          {/* 3para */}
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-spade-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z" />
            </svg>

            <p> CO₂-Emissionen kombiniert¹</p>
          </div>
        </div>

        {/* paragraph and number */}

        <div className=" text-sm text-start ">
          <p className="flex  gap-5 mb-5">
            <p>1</p>
            <span>
              Die angegebenen Werte wurden nach dem vorgeschriebenen
              Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“
              i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die
              Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet.
              Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
              ermittelt. Weitere Informationen zum offiziellen
              Kraftstoffverbrauch und den offiziellen spezifischen
              CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über
              den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch
              aller neuen Personenkraftwagenmodelle“ entnommen werden, der an
              allen Verkaufsstellen und bei der Deutschen Automobil Treuhand
              GmbH unter www.dat.de unentgeltlich erhältlich ist.
            </span>
          </p>

          <p className="flex gap-5  mb-5">
            <p>2</p>
            <span>
              Die angegebenen Werte sind die „gemessenen NEFZ-CO₂-Werte“ i. S.
              v. Art. 2 Nr. 2 Durchführungsverordnung (EU) 2017/1153, die im
              Einklang mit Anhang XII der Verordnung (EG) Nr. 692/2008 ermittelt
              wurden. Die Kraftstoffverbrauchswerte wurden auf Basis dieser
              Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO
              692/2008/EG ermittelt. Aufgrund gesetzlicher Änderungen der
              maßgeblichen Prüfverfahren können in der für die Fahrzeugzulassung
              und ggf. Kfz-Steuer maßgeblichen Übereinstimmungsbescheinigung des
              Fahrzeugs höhere Werte eingetragen sein. Weitere Informationen zum
              offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
              CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über
              den Kraftstoffverbrauch und die CO₂-Emissionen neuer
              Personenkraftwagen“ entnommen werden, der an allen Verkaufsstellen
              und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de
              unentgeltlich erhältlich ist..
            </span>
          </p>

          <p className="flex  gap-5 mb-5">
            <p>3</p>
            <span>
              DDie angegebenen Werte wurden nach dem vorgeschriebenen
              Messverfahren ermittelt. Es handelt sich um „WLTP-CO₂-Werte“ i. S.
              v. Art. 2 Nr. 3 Durchführungsverordnung (EU) 2017/1153. Die
              Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet.
              Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
              ermittelt. Weitere Informationen zum offiziellen
              Kraftstoffverbrauch und den offiziellen spezifischen
              CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über
              den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch
              aller neuen Personenkraftwagenmodelle“ entnommen werden, der an
              allen Verkaufsstellen und bei der Deutschen Automobil Treuhand
              GmbH unter www.dat.de unentgeltlich erhältlich ist.
            </span>
          </p>

          <p className="flex gap-5 mb-5">
            <p>4</p>
            <span>
              Die angegebenen Werte wurden nach dem vorgeschriebenen
              Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“
              i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die
              Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet.
              Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
              ermittelt. Weitere Informationen zum offiziellen
              Kraftstoffverbrauch und den offiziellen spezifischen
              CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über
              den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch
              aller neuen Personenkraftwagenmodelle“ entnommen werden, der an
              allen Verkaufsstellen und bei der Deutschen Automobil Treuhand
              GmbH unter www.dat.de unentgeltlich erhältlich ist.Angaben zu
              Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind
              vorläufig und wurden vom Technischen Dienst für das
              Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens
              ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und
              Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht
              vor. Abweichungen zwischen den Angaben und den amtlichen Werten
              sind möglich.
            </span>
          </p>

          <p className="flex gap-5 mb-5">
            <p>5</p>
            <span>
              Angaben zum Kraftstoffverbrauch und CO₂-Emissionen sind vorläufig
              und wurden vom Technischen Dienst für das Zertifizierungsverfahren
              nach Maßgabe des WLTP-Prüfverfahrens ermittelt. Eine
              EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen
              Werten liegen noch nicht vor. Abweichungen zwischen den Angaben
              und den amtlichen Werten sind möglich.
            </span>
          </p>

          <p className="flex gap-5 mb-5">
            <p>6</p>
            <span>
              Stromverbrauch und Reichweite wurden auf der Grundlage der VO
              692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig
              von der Fahrzeugkonfiguration. Weitere Informationen zum
              offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
              CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über
              den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch
              aller neuen Personenkraftwagenmodelle“ entnommen werden, der an
              allen Verkaufsstellen und bei der Deutschen Automobil Treuhand
              GmbH unter www.dat.de unentgeltlich erhältlich ist.
            </span>
          </p>

          <p className="flex gap-5 mb-5">
            <p>7</p>
            <span>
              Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden
              vom Technischen Dienst für das Zertifizierungsverfahren nach
              Maßgabe der UN/ECE-Regelung Nr. 101 ermittelt. Die
              EG-Typgenehmigung und eine Konformitätsbescheinigung mit amtlichen
              Werten liegen noch nicht vor. Abweichungen zwischen den Angaben
              und den amtlichen Werten sind möglich.
            </span>
          </p>

          <p className="flex gap-5 mb-5">
            <p>8</p>
            <span>
              Alle technischen Angaben sind vorläufig und wurden intern nach
              Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt.
              Es liegen bislang weder bestätigte Werte vom TÜV noch eine
              EG-Typgenehmigung noch eine Konformitätsbescheinigung mit
              amtlichen Werten vor. Abweichungen zwischen den Angaben und den
              amtlichen Werten sind möglich.
            </span>
          </p>

          <p className="flex gap-5">
            <p>9</p>
            <span>
              Weitere Informationen zum offiziellen Kraftstoffverbrauch und den
              offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen
              können dem „Leitfaden über den Kraftstoffverbrauch, die
              CO₂-Emissionen und den Stromverbrauch aller neuen
              Personenkraftwagenmodelle” entnommen werden, der an allen
              Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH
              unter www.dat.de unentgeltlich erhältlich ist.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footnumber;
