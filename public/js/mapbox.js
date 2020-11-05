/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZm1vcmFsZXNjIiwiYSI6ImNrZ2VjbzFvYTAwNHUycG1sa3NsdzZ6ZGcifQ.dmhMA28PekUJPxgrJ75DKQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fmoralesc/ckgent8vm00hw19p7ks2lonk3',
    scrollZoom: false
    //   center: [-118.170749, 34.111172],
    //   zoom: 6,
    //   interactive: true
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
