"use client";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import { cities } from '@/components/ui/cities';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

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
  
  // Add markers with hover effect
  cities.forEach((city) => {
    const formatCoords = (coords) => {
      const [lng, lat] = coords;
  
      const formattedLat = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? "N" : "S"}`;
      const formattedLng = `${Math.abs(lng).toFixed(2)}° ${lng >= 0 ? "E" : "W"}`;
  
      return `${formattedLat}, ${formattedLng}`;
    };
    // Parent container with shared box for marker and popup
    const container = document.createElement("div");
    container.className =
      "group relative w-auto max-w-40 h-auto bg-white border border-gray-300 shadow-md px-2 py-1 text-left font-spacemono text-xs transition-all duration-300 ease-in-out";

    // Marker content (default visible)
    const markerContent = document.createElement("div");
    markerContent.className =
      "marker-content block transition-all duration-300 group-hover:hidden";
    markerContent.innerHTML = `<div>${city.name}</div>`;

    // Popup content (default hidden)
    const popupContent = document.createElement("div");
    popupContent.className =
      "p-2 hidden opacity-0 scale-90 group-hover:z-100 group-hover:block group-hover:opacity-100 group-hover:scale-100 transition-all duration-300";
    popupContent.innerHTML = `
      <p class="text-darkgray text-sm mb-8">${city.description}</p>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-[#ABC9A1]"></div>
        <h3 class="text-darkgray text-sm">${city.name}</h3>
      </div>
      <div class="border-t border-gray-300 my-2 w-full"></div>
      <h4 class="text-lightgray text-[10px] track-tighter">${formatCoords(city.coords)}</h4>
    `;

    // Append marker and popup content to the shared container
    container.appendChild(markerContent);
    container.appendChild(popupContent);

    // Add hover effect dynamically for container
    container.addEventListener("mouseenter", () => {
      container.style.zIndex = "100"; // Bring this container to the front
    });

    container.addEventListener("mouseleave", () => {
      container.style.zIndex = "1"; // Reset stacking order
    });

  // Add the container to the map
  new mapboxgl.Marker({
    element: container,
    anchor: "bottom",
  })
    .setLngLat(city.coords)
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
