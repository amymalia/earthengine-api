var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.18, lng: -121.62},
    zoom: 10,
    mapTypeId: 'satellite',
    zoomControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    scaleControl: true,
    streetViewControl: false,
  });

  var myLatLng = {lat: 36.18, lng: -121.62};
  //var image = 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=https%3A%2F%2Fdata.256media.ie%2Fwp-content%2Fuploads%2F2015%2F07%2Ftumblr_mimi12jHA01ruaoizo1_500.gif&sp=115735941e4f3a0d297108bb6b5d405e';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    //icon: image,
    title: 'Helloooo!'
  })
  var HotSpots = new google.maps.KmlLayer({
    url: 'https://storage.googleapis.com/hotmap-demo/test.kml',
    map: map
  });
  var minZoom = 0;
  var maxZoom = 18;
  var tilePrefixVisible = 'https:\/\/storage.googleapis.com\/hotmap-demo\/visible\/';
  var tilePrefixInfrared = 'https:\/\/storage.googleapis.com\/hotmap-demo\/infrared\/';
  var tileSuffix = '.png';
  var overlayMapTypeVisible = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [tilePrefixVisible, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
    tileSize: new google.maps.Size(256, 256),
  });

  var overlayMapTypeInfrared = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [tilePrefixInfrared, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
    tileSize: new google.maps.Size(256, 256),
  });
  map.overlayMapTypes.push(overlayMapTypeInfrared);
  //map.overlayMapTypes.push(overlayMapTypeVisible);
}

/*
// Initialize the Google Map and add our custom layer overlay.
var initialize = function(mapId, token) {
  // The Google Maps API calls getTileUrl() when it tries to display a map
  // tile.  This is a good place to swap in the MapID and token we got from
  // the Python script. The other values describe other properties of the
  // custom map type.
  var eeMapOptions = {
    getTileUrl: function(tile, zoom) {
      var baseUrl = 'https://earthengine.googleapis.com/map';
      var url = [baseUrl, mapId, zoom, tile.x, tile.y].join('/');
      url += '?token=' + token;
      return url;
    },
    tileSize: new google.maps.Size(500, 500)
  };

  // Create the map type.
  var mapType = new google.maps.ImageMapType(eeMapOptions);

  var myLatLng = new google.maps.LatLng(21.3069, -157.8583);
  var mapOptions = {
    center: myLatLng,
    zoom: 8,
    maxZoom: 10,
    streetViewControl: false
  };

  // Create the base Google Map.
  var map = new google.maps.Map(
      document.getElementById('map'), mapOptions);

  // Add the EE layer to the map.
  map.overlayMapTypes.push(mapType);
};
    */