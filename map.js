function initMap() {
    const map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: { lat: 30, lng: 20},
    zoom: 3,
    });

    const worldoffices =[
        { lat: 43.22827169178229, lng: 76.86348655477379},
        { lat: 40.760375, lng: -73.972754},
        { lat: 48.873327, lng: 2.297117},
        { lat: 55.769469, lng: 37.597066},
        { lat: 1.301155, lng: 103.854528}
    ];
    const titles = ["Almaty", "New York", "Paris", "Moscow", "Singapore"]
    for (var i = worldoffices.length; i >= 0; i--) {
        const marker = new google.maps.Marker({
            position: worldoffices[i],
            animation: google.maps.Animation.DROP,
            map: map,
            title: titles[i],
        });
    }
}