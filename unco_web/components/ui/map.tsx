"use client";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2F0ZXJsaWx5LWx5Y2hpLXpob3UiLCJhIjoiY200cGpqM3YxMHQwcTJxczVhbGZyNW02dCJ9.0hNaiHZ9pE-jF35w1hFDJQ';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const cities = [
    {
      name: "San Francisco",
      coords: [-122.4194, 37.7749],
      description: "Interview with Vienna Rae",
    },
    {
      name: "Taipei",
      coords: [121.5654, 25.033],
      description: "Film Screening: Vitalik",
    },
    {
      name: "Forest City",
      coords: [103.7035, 1.5841],
      description: "Story from Gentle Crypto",
    },
  ];
  
  useEffect(() => {
    console.log("Initializing Map...");
    if (!mapContainer.current) {
      console.error("Map container is not available!");
      return;
    }
    
    // Initialize the Mapbox map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [0, 20],
      zoom: 1.5,
    });
  
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());
  
    // Add markers and popup content
    cities.forEach((city) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2 bg-white shadow-md rounded-lg">
           <h3 class="font-bold text-gray-700">${city.name}</h3>
           <p class="text-gray-600">${city.description}</p>
         </div>`
      );
  
      new mapboxgl.Marker({ color: "#C98292" }) // Custom marker color
        .setLngLat(city.coords)
        .setPopup(popup) // Show popup on click
        .addTo(map.current);
    });
  
    return () => map.current.remove();
  }, []);

  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
