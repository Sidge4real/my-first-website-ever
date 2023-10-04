/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

//map variabele en map aangemaakt zonder de inwendige map gegevens:
let apMap = L.map('map6').setView([51.144710, 4.339254], 17);

//map vervolledigd:
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "",
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ' //toegang token
}).addTo(apMap);

// define rectangle geographical bounds
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(apMap);

// zoom the map to the rectangle bounds
apMap.fitBounds(bounds);
// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"

L.marker([51.23009, 4.41616]).addTo(apMap);
let popup = L.popup()
    .setLatLng([51.23009, 4.41616])
    .setContent("AP-Hogeschool <br> Ellermanstraat 33")
    .openOn(apMap);