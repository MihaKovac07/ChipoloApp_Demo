let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 46.17176595278336, lng: 15.054020893797365},
        zoom: 19,
    });
    new google.maps.Marker({
        position: { lat: 46.17176595278336, lng: 15.054020893797365},
        map: map,
        title:"My Keys",
        icon: "SlikeDemo2/map-marker.png"
    });
}

