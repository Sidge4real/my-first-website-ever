/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

//map variabele en map aangemaakt zonder de inwendige map gegevens:
let apMap = L.map('map3').setView([51.23009, 4.41616], 17);

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
let bounds = [[51.115919, 4.310967], [51.094942, 4.346166]];

// create an orange rectangle
L.rectangle(bounds, {color: "white", weight: 1, fillColor: 'lightblue'}).addTo(apMap).bindPopup("Niel");

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
L.marker([51.110999, 4.319089],{icon:Marker}).addTo(apMap).bindPopup("Startpunt");
L.marker([51.114318, 4.314461],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt A");
L.marker([51.105457, 4.321652],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt B");
L.marker([51.106838, 4.327047],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt C");
L.marker([51.098957, 4.341808],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt D");
L.marker([51.100220, 4.343909],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt E");
L.marker([51.099973, 4.340022],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt F");
L.marker([51.109157, 4.339503],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt G");
L.marker([51.111841, 4.337711],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt H");
L.marker([51.110010, 4.319719],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt J");
