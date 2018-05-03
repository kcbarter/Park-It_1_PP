function initMap() {
    var grc = {lat: 47.313582, lng: -122.1800072};
    var hawaii = {lat: 21.9811, lng: -159.3711};
    var mapDiv = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: hawaii
    });
    var marker = new google.maps.Marker({
        position: hawaii,
        map: mapDiv
    });
}

$(document).on("click", "#park", function () {
    alert("Set parking location");
});

$(document).on("click", "#find", function () {
    alert("Get parking location");
});