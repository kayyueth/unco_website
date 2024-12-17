"use client";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import { cities } from '@/components/ui/cities';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

// Mapbox Access Token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null); 

  useEffect(() => {
    if (map.current) return; // Prevent re-initializing map
    if (!mapContainer.current) return; // Ensure container exists

    // Initialize the Mapbox map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL",
      center: [70, 35.8617],
      zoom: 1.5,
    });
  
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.scrollZoom.disable();

    // Enable scrollZoom only when user interacts with the map
    map.current?.on('click', () => {
      map.current?.scrollZoom.enable();
    });
    map.current?.on('mouseout', () => {
      map.current?.scrollZoom.disable();
    });
  
    // Add markers with hover effect
    cities.forEach((city) => {
      const formatCoords = (coords:[number, number]) => {
        const [lng, lat] = coords;

        const formattedLat = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? "N" : "S"}`;
        const formattedLng = `${Math.abs(lng).toFixed(2)}° ${lng >= 0 ? "E" : "W"}`;

        return `${formattedLat}, ${formattedLng}`;
      };

      // Parent container with shared box for marker and popup
      const container = document.createElement("div");
      container.className =
        "group relative w-auto max-w-36 h-auto bg-white border border-gray-300 shadow-md px-1 py-1 text-left font-spacemono text-xs transition-all duration-300 ease-in-out";

      // Marker content (default visible)
      const markerContent = document.createElement("div");
      markerContent.className =
        "marker-content block transition-all duration-300 group-hover:hidden";
      markerContent.innerHTML = `<div>${city.name}</div>`;

      // Popup content (default hidden)
      const popupContent = document.createElement("div");
      popupContent.className =
        "p-2 hidden opacity-0 scale-90 group-hover:z-100 group-hover:block group-hover:opacity-100 group-hover:scale-100 transition-all duration-300";

      // Article HTML (if any)
      const articleHTML =
        city.article && city.article.length > 0
          ? city.article
              .map(
                (article) => `
            <div class="mb-4">
              <a
                href="${article.link}"
                target="_blank"
              >
                <h3 class="text-darkgray text-xs font-neue">${article.title}</h3>
              </a>
            
              <div class="flex items-center gap-1">
                <a
                  href="${article.link}"
                  target="_blank"
                  class="text-[#666] font-neue text-[10px] underline"
                >
                  Read More
                </a>
                <span class="no-underline">⟶</span>
              </div>
            </div>
          `
              )
              .join("")
          : "";

      // Event HTML (if any)
      const eventHTML =
        city.events && city.events.length > 0
          ? city.events
              .map(
                (event) => `
            <div class="mb-4">
              <h3 class="text-darkGray text-xs font-neue">${event.eventName}</h3>
              <p class="text-[#666] text-[10px] font-neue">${event.year}</p>
            </div>
          `
              )
              .join("")
          : "";

      // Combine Articles and Events
      popupContent.innerHTML = `
        ${articleHTML}
        ${eventHTML}
        <div class="flex items-center gap-2 mt-10">
          <div class="w-2 h-2 rounded-full bg-[#ABC9A1]"></div>
          <h3 class="text-darkgray text-xs">${city.name}</h3>
        </div>
        <div class="border-t border-gray-300 my-2 w-full"></div>
        <h4 class="text-lightgray text-[10px] tracking-tighter">${formatCoords(
          city.coords
        )}</h4>
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
      if (map.current) {
        new mapboxgl.Marker({
          element: container,
          anchor: "bottom",
        })
          .setLngLat(city.coords)
          .addTo(map.current);
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };

  }, []);

  return <div ref={mapContainer} className="h-[600px] w-full"></div>;
}
