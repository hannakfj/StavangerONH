// AppointmentLetter.js

import React from 'react';
import './AppointmentLetter.css';

const AppointmentLetter = () => {
  return (
    <div className="appointment-letter">
      <h1>Innkallingsbrev</h1>
      <div className="letter-header">
        <h2>Innkalling til undersøkelse hos Øre-Nese-Hals lege</h2>
        <p>
          <strong>Stavanger Øre-Nese-Hals</strong><br />
          Boganesveien 10<br />
          4020 Stavanger<br />
          Telefon: 51 88 35 00<br />
          <a href="http://www.stavangeronh.no">http://www.stavangeronh.no</a>
        </p>
      </div>
      <p>
        Du har fått time og / eller vil få sms om time hos øre-nese-hals spesialist Elin-Johanne Katle, Stavanger Øre Nese Hals.
      </p>
      <p>
        Vi holder til i etagen over REMA butikken ved Hinna krossen. <strong>Inngang motsatt av REMA og Apotek 1.</strong>
      </p>
      <p>
        Det er gode parkeringsmuligheter utenfor klinikken.
      </p>
      <p>
        Bruker du tabletter mot allergi og skal ta allergi test som del av konsultasjonen, ber vi om at du unngår å ta disse medikamentene 3-4 dager før du kommer til timen. Føler du at du ikke kan være uten tabletter, ta kontakt med oss.
      </p>
      <p>
        Egenandel for konsultasjonen betales via link som sendes på SMS etter timen.
      </p>
      <p>
        Dersom timen ikke passer, kontakt oss på mail <a href="mailto:post@stavangeronh.no">post@stavangeronh.no</a> eller på telefon 51883500, så forsøker vi å finne en ny time til deg. Avbestilling må skje senest 24 timer før avtalen, ubenyttet time blir belastet.
      </p>
      <p>
        <strong>Smittevern:</strong> Ikke møt opp ved mistanke om korona eller om du har andre virusinfeksjoner. Ta kontakt med oss dersom du er i tvil om du skal komme.
      </p>
      <p><strong>Vel møtt!</strong></p>
      <p>
        Med vennlig hilsen<br />
        <strong>Elin-Johanne Katle</strong><br />
        Stavanger Øre Nese Hals
      </p>
    </div>
  );
};

export default AppointmentLetter;
