/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

//map variabele en map aangemaakt zonder de inwendige map gegevens:
let apMap = L.map('map1').setView([51.144710, 4.339254], 100);

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
// let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
let bounds = [[51.161490, 4.329811],[51.133757, 4.352957]];

// create an orange rectangle
L.rectangle(bounds, {color: "white", weight: 1, fillColor: 'lightblue'}).addTo(apMap).bindPopup("Hemiksem");

// zoom the map to the rectangle bounds
apMap.fitBounds(bounds);
// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"

let Marker = L.icon({
    iconUrl: '../assets/MarkerStart.png',
    iconSize: [60, 70], // size of the icon
});
let MarkerStart = L.icon({
    iconUrl: '../assets/Marker.png',
    iconSize: [60, 70], // size of the icon
});
L.marker([51.152637, 4.348327],{icon:Marker}).addTo(apMap).bindPopup("Startpunt");
L.marker([51.144257, 4.346060],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt A");
L.marker([51.149186, 4.344389],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt D");
L.marker([51.141315, 4.335126],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt B");
L.marker([51.143090, 4.331269],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt C");

