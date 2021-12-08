// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [32.668603, -114.598991],
    [30.1974292, -97.6663058],
    [39.849312, -104.673828],
    [40.643948, -73.782351]
  ];

// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
   color: "blue", 
   weight: 4,
   opacity: 0.5,
   dashArray: '10'
}).addTo(map);

// Add tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add 'graymap' tile layer to the map.
streets.addTo(map);