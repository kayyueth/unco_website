"use client";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import { cities } from '@/components/ui/cities';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2F0ZXJsaWx5LWx5Y2hpLXpob3UiLCJhIjoiY200cGpqM3YxMHQwcTJxczVhbGZyNW02dCJ9.0hNaiHZ9pE-jF35w1hFDJQ';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  useEffect(() => {
    console.log("Initializing Map...");
    if (!mapContainer.current) {
      console.error("Map container is not available!");
      return;
    }

    // Initialize the Mapbox map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/waterlily-lychi-zhou/cm4ps1mnz008h01r0cp4g1nku",
      center: [70, 35.8617],
      zoom: 2,
    });
  
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());
  
    // Add markers and popup content
    cities.forEach((city) => {
    // Create a container div for the label
    const markerContainer = document.createElement("div");
    markerContainer.className = "city-container";

    // Add city name text inside the container
    markerContainer.innerHTML = `
      <div class="city-label border border-gray bg-white p-1 font-spacemono">${city.name}</div>
    `;

    // Add popup
    const popup = new mapboxgl.Popup({ offset: 0 }).setHTML(
      `<div class="p-2 bg-white shadow-md rounded-lg">
         <h3 class="font-bold text-gray-700">${city.name}</h3>
         <p class="text-gray-600">${city.description}</p>
       </div>`
    );

    // Add the marker to the map
    new mapboxgl.Marker({
      element: markerContainer,
      anchor: "center", // Center the container on the coordinates
    })
      .setLngLat(city.coords)
      .setPopup(popup) 
      .addTo(map.current);


  
/*       new mapboxgl.Marker({ color: "#C98292" }) // Custom marker color
        .setLngLat(city.coords)
        .setPopup(popup) // Show popup on click
        .addTo(map.current); */
    });
  
    return () => map.current.remove();
  }, []);

  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
