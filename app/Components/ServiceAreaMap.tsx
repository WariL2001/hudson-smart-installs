"use client";
import { useEffect, useRef } from "react";

export default function ServiceAreaMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const initializingRef = useRef(false); // 🔒 evita doble init en StrictMode

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!mapEl.current) return;
      if (mapRef.current || initializingRef.current) return; // ya hay mapa o está iniciando

      initializingRef.current = true;

      const L = await import("leaflet");
      if (cancelled || mapRef.current) {
        initializingRef.current = false;
        return;
      }

      const map = L.map(mapEl.current, { scrollWheelZoom: false }).setView(
        [40.73, -74.09],
        12
      );
      mapRef.current = map;
      initializingRef.current = false;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
        maxZoom: 19,
      }).addTo(map);

      // Colores desde tus tokens de Tailwind v4 (@theme)
      const styles = getComputedStyle(document.documentElement);
      const brandNavy = styles.getPropertyValue("--color-brand-navy").trim() || "#0D1B2A";
      const brandOrange = styles.getPropertyValue("--color-brand-orange").trim() || "#FF7A00";

      const locations: { name: string; coords: [number, number] }[] = [
        { name: "Jersey City", coords: [40.7282, -74.0776] },
        { name: "Hoboken", coords: [40.7433, -74.0324] },
        { name: "Kearny", coords: [40.7684, -74.1454] },
        { name: "Union City", coords: [40.7795, -74.0238] },
        { name: "Newark", coords: [40.7357, -74.1724] },
        { name: "Elizabeth", coords: [40.66399, -74.2107] },
        { name: "Hackensack", coords: [40.8859, -74.0435] },
        { name: "Clifton", coords: [40.8584, -74.1638] },
        { name: "North Bergen", coords: [40.793, -74.0247] },
        { name: "Bayonne", coords: [40.6687, -74.1143] },
      ];

      const bounds = L.latLngBounds([]);
      locations.forEach(({ name, coords }) => {
        L.circleMarker(coords, {
          radius: 8,
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9,
          color: brandNavy,
          fillColor: brandOrange,
        })
          .addTo(map)
          .bindTooltip(name);
        bounds.extend(coords);
      });
      map.fitBounds(bounds.pad(0.25));
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      initializingRef.current = false;
    };
  }, []);

  return (
    <div
      ref={mapEl}
      className="h-[420px] w-full rounded-2xl overflow-hidden border border-black/10"
    />
  );
}
