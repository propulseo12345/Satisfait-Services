"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const cities = [
  { name: "Jurançon", lat: 43.2833, lng: -0.3833, isMain: true },
  { name: "Pau", lat: 43.2951, lng: -0.3708, isMain: true },
  { name: "Narcastet", lat: 43.2833, lng: -0.3167, isMain: false },
  { name: "Billère", lat: 43.3000, lng: -0.3917, isMain: false },
  { name: "Lons", lat: 43.3167, lng: -0.4000, isMain: false },
  { name: "Lescar", lat: 43.3333, lng: -0.4167, isMain: false },
  { name: "Bizanos", lat: 43.2833, lng: -0.3500, isMain: false },
  { name: "Idron", lat: 43.2667, lng: -0.3333, isMain: false },
  { name: "Gan", lat: 43.2333, lng: -0.3833, isMain: false },
  { name: "Morlaàs", lat: 43.3500, lng: -0.2667, isMain: false },
];

const centerLat = 43.295;
const centerLng = -0.37;
const radiusMeters = 15000;

export default function InterventionMapClient() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Fix for default marker icons in Leaflet with webpack
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });

    // Create map
    const map = L.map(mapRef.current, {
      center: [centerLat, centerLng],
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Add zone circle (outer - dashed)
    L.circle([centerLat, centerLng], {
      radius: radiusMeters,
      color: "#3B82F6",
      fillColor: "#3B82F6",
      fillOpacity: 0.08,
      weight: 3,
      dashArray: "12, 8",
    }).addTo(map);

    // Add zone circle (inner - solid)
    L.circle([centerLat, centerLng], {
      radius: radiusMeters * 0.6,
      color: "#3B82F6",
      fillColor: "#3B82F6",
      fillOpacity: 0.12,
      weight: 2,
    }).addTo(map);

    // Custom icon for main cities
    const mainIcon = L.divIcon({
      className: "custom-marker",
      html: `
        <div style="
          background: linear-gradient(135deg, #3B82F6, #2563EB);
          width: 32px;
          height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        ">
          <div style="
            transform: rotate(45deg);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            font-weight: bold;
          ">★</div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Custom icon for other cities
    const cityIcon = L.divIcon({
      className: "custom-marker",
      html: `
        <div style="
          background: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid #3B82F6;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        "></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });

    // Add markers for each city
    cities.forEach((city) => {
      const icon = city.isMain ? mainIcon : cityIcon;
      const marker = L.marker([city.lat, city.lng], { icon }).addTo(map);

      marker.bindPopup(`
        <div style="text-align: center; min-width: 100px;">
          <p style="font-weight: 600; color: #171717; margin: 0; font-size: 14px;">${city.name}</p>
          ${city.isMain ? '<p style="font-size: 11px; color: #3B82F6; margin: 4px 0 0 0;">Zone principale</p>' : ""}
        </div>
      `);
    });

    // Add legend using custom control
    const LegendControl = L.Control.extend({
      onAdd: function () {
        const div = L.DomUtil.create("div", "legend");
        div.innerHTML = `
          <div style="
            background: white;
            padding: 12px 16px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            font-family: system-ui, sans-serif;
          ">
            <p style="font-weight: 600; margin: 0 0 8px 0; font-size: 13px; color: #171717;">Zone d'intervention</p>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <div style="width: 12px; height: 12px; background: linear-gradient(135deg, #3B82F6, #2563EB); border-radius: 50%;"></div>
              <span style="font-size: 12px; color: #525252;">Zones principales</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 12px; height: 12px; background: white; border: 2px solid #3B82F6; border-radius: 50%;"></div>
              <span style="font-size: 12px; color: #525252;">Communes desservies</span>
            </div>
          </div>
        `;
        return div;
      },
    });
    const legend = new LegendControl({ position: "bottomleft" });
    legend.addTo(map);

    setIsLoaded(true);

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-100 rounded-2xl animate-pulse flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-neutral-500">Chargement de la carte...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-2xl shadow-lg overflow-hidden"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
