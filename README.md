# bysykkel
Webapplikasjon som viser tilgjengeligheten til bysykler i Oslo.

Viser bysykkelstasjoner med antall sykler og ledige låser.

## Om løsningen
Løsningen er skrevet i Javascript/React med Next.js som rammeverk.

Dataene hentes fra bysykkel-apiet ved lasting av siden. Er endepunktene utilgjengelige, vises en enkel feilmelding på siden.

Jeg bruker ESLint med Standard som ryddehjelp.

## Installasjon
Maskinen løsningen skal kjøres på, må ha Node/npm installert.

Sett inn en gyldige API-nøkler i config.js (se nedenfor).

Installer med `npm install` og kjør på localhost med `npm run dev`.

Skal den kjøres i produksjon, må den bygges med `npm run build` og startes med `npm run start`.

### API-nøkler
API-nøkler ligger i config.js.

apiKey: API-nøkkel fra https://developer.oslobysykkel.no/api 

mapMapKey: API-nøkkel fra https://cloud.google.com/maps-platform/

## Testing
Enkle tester med Jest

Kjør testene med `npm run test``

## Demo
Løsningen ligger på [https://bysykkel.knutsen.dev]
