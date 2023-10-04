/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

//map variabele en map aangemaakt zonder de inwendige map gegevens:
let apMap = L.map('map2').setView([51.23009, 4.41616], 9);

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
let bounds = [[51.084889, 4.338167], [51.016919, 4.400480]];

// create an orange rectangle
L.rectangle(bounds, {color: "white", weight: 1, fillColor: 'lightblue'}).addTo(apMap).bindPopup("Willebroek");

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
L.marker([51.081615, 4.367486],{icon:Marker}).addTo(apMap).bindPopup("Startpunt");
L.marker([51.076779, 4.391590],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt A");
L.marker([51.072091, 4.419054],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt B");
L.marker([51.066590, 4.408554],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt C");
L.marker([51.071509, 4.401049],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt D");
L.marker([51.074164, 4.402461],{icon:MarkerStart}).addTo(apMap).bindPopup("Knooppunt E");

