# bysykkel
Webapplikasjon som viser tilgjengeligheten til bysykler i Oslo.

Viser bysykkelstasjoner med antall sykler og ledige låser.

## Installasjon
Maskinen løsningen skal kjøres på, må ha Node/npm installert.

Sett inn en gyldig API-nøkkel fra https://developer.oslobysykkel.no/api i filen config.js.

Installer med `npm install` og kjør på localhost med `npm run dev`.

## Om løsningen
Løsningen er skrevet i Javascript/React med Next.js som rammeverk.

Dataene hentes fra bysykkel-apiet ved lasting av siden. Er endepunktene utilgjengelige, vises en enkel feilmelding på siden.
