var littleton = L.marker([5.340749,-3.987468]).bindPopup('<h3>Cocody espace UFHB</h3><p>Disponible</p><img src="chemin/vers/votre/image.jpg" alt="Cocody espace UFHB" width="200"><a href="cinet.html"><button>Commander</button></a>'),
    denver    = L.marker([5.345075998359758, -3.989137594967888]).bindPopup('<h3>Espace 2</h3><p>Non disponible</p><img src="chemin/vers/votre/image.jpg" alt="Espace 2" width="200"><a href="cinet.html"><button>Commander</button></a>'),
    aurora    = L.marker([5.3574, -3.9776]).bindPopup('<h3>Eden Espace</h3><img src="chemin/vers/votre/image.jpg" alt="Eden Espace" width="200"><a href="cinet.html"><button>Commander</button></a>'),
    golden    = L.marker([39.77, -105.23]).bindPopup('<h3>This is Golden, CO.</h3><img src="chemin/vers/votre/image.jpg" alt="This is Golden, CO." width="200"><a href="cinet.html"><button>Reserver</button></a>');

function commander() {
    // Add your logic for the "Commander" button here
    console.log("Commander button clicked");
}


var cities = L.layerGroup([littleton, denver, aurora, golden]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});

var map = L.map('map', {
    center: [5.300, -4.180],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;