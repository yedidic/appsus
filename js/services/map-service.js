const API_KEY = 'AIzaSyAls7l4BOIH_m37Pa-5xOcc8ddGZaKOmJQ';
var map;

function getPosition() {
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function loadMap(id, lat = 32.0881183, lng = 34.803004) {
    return _connectGoogleApi()
    .then(() => {
        map = new google.maps.Map(
            document.querySelector('#map' + id), {
                center: { lat, lng },
                zoom: 15
            })
    })
}

function searchByAddress(address) {
    return _connectGoogleApi()
    .then(() => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
    })
    .then((res) => {
        return res.json()
    })
}

function addMarker(loc, title) {
    let iconUrl = 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Push-Pin-1-Left-Pink-icon.png'
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
        icon: iconUrl
    });
    return marker;
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    // const API_KEY = '';
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);
    
    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
        // elGoogleApi.onerror = reject.bind(null,'Google script failed to load')
    })
}

function getMapCenter() {
    return map.getCenter();
}

export default {
    loadMap,
    searchByAddress,
    addMarker,
    getMapCenter,
    getPosition
}

