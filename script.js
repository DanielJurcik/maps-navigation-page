mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanUiLCJhIjoiY2txNWl4cDEzMTV5djJ1a2FkbW15aGpyMiJ9.Xaxg4H0dv8MkErd33ytVMw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(position){
    setupMap([-2.24, 53.48])
}


function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
      
      
      map.addControl(directions, 'top-left');
}