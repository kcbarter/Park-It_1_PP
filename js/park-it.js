var storage;

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);

    storage = window.localStorage;
}

function onDeviceReady() {
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');

    if (cordova.platformid == 'ios'){
        node.setAttribute('href', 'styles/park-it-ios.css');

        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    }
    else{
        node.setAttribute('href', 'styles/park-it-android.css');
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }

    $('head').appendChild(node);
}

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

$(document).on("click", "#retrieve", function () {
    alert("Get parking location");
});

$(document).on('click', '#gotIt', function () {
    $('#instructions').css('display', 'none');
});

