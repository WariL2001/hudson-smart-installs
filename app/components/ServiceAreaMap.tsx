"use client";

import React, { useEffect, useRef } from "react";

// Importa SOLO tipos para no romper SSR; Leaflet real se carga dinámicamente.
import type {
  Map as LeafletMap,
  Control as LeafletControl,
  ControlPosition,
  LayerGroup,
  LatLngBoundsExpression,
  CircleMarkerOptions,
} from "leaflet";

/**
 * Leaflet map with two toggleable layers:
 * - Core (navy)
 * - By request (orange)
 * Includes a custom control with checkboxes + "Fit" button.
 */
export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const groupsRef = useRef<{ core: LayerGroup; req: LayerGroup } | null>(null);
  const controlRef = useRef<LeafletControl | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (!mounted || !containerRef.current || typeof window === "undefined") return;

      const L = await import("leaflet");

      // 1) Crea el mapa una sola vez
      if (!mapRef.current) {
        const map = L.map(containerRef.current, {
          center: [40.7357, -74.1724],
          zoom: 10,
          scrollWheelZoom: false,
        });
        mapRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
          maxZoom: 19,
        }).addTo(map);
      }

      const map = mapRef.current!;

      // 2) Si ya existían grupos (por doble-montaje), quítalos antes de volver a crearlos
      if (groupsRef.current) {
        const { core, req } = groupsRef.current;
        core.remove();
        req.remove();
        groupsRef.current = null;
      }

      // --- Estilos
      const coreStyle: CircleMarkerOptions = {
        radius: 8,
        color: "#0D1B2A",
        fillColor: "#0D1B2A",
        fillOpacity: 0.9,
        weight: 1,
      };
      const reqStyle: CircleMarkerOptions = {
        radius: 8,
        color: "#FF7A00",
        fillColor: "#FF7A00",
        fillOpacity: 0.9,
        weight: 1,
      };

      // --- Puntos
      type City = { name: string; lat: number; lng: number };
      const CORE: City[] = [
        { name: "Jersey City", lat: 40.7282, lng: -74.0776 },
        { name: "Hoboken", lat: 40.743, lng: -74.0324 },
        { name: "Union City", lat: 40.7795, lng: -74.0238 },
        { name: "North Bergen", lat: 40.7947, lng: -74.0243 },
        { name: "Weehawken", lat: 40.7695, lng: -74.0204 },
        { name: "Kearny", lat: 40.7684, lng: -74.1454 },
        { name: "Bayonne", lat: 40.6687, lng: -74.1143 },
      ];
      const BY_REQUEST: City[] = [
        { name: "Newark", lat: 40.7357, lng: -74.1724 },
        { name: "Elizabeth", lat: 40.6639, lng: -74.2107 },
        { name: "Hackensack", lat: 40.8859, lng: -74.0435 },
        { name: "Clifton", lat: 40.8584, lng: -74.1638 },
      ];

      // --- Crea grupos nuevos
      const coreGroup = L.layerGroup();
      const reqGroup = L.layerGroup();

      CORE.forEach((c) =>
        L.circleMarker([c.lat, c.lng], coreStyle)
          .bindTooltip(c.name, { permanent: false, direction: "top" })
          .addTo(coreGroup)
      );
      BY_REQUEST.forEach((c) =>
        L.circleMarker([c.lat, c.lng], reqStyle)
          .bindTooltip(c.name, { permanent: false, direction: "top" })
          .addTo(reqGroup)
      );

      coreGroup.addTo(map);
      reqGroup.addTo(map);

      groupsRef.current = { core: coreGroup, req: reqGroup };

      // --- Ajusta bounds a lo visible
      const allPts: LatLngBoundsExpression = [
        ...CORE.map((c) => [c.lat, c.lng] as [number, number]),
        ...BY_REQUEST.map((c) => [c.lat, c.lng] as [number, number]),
      ];
      const allBounds = L.latLngBounds(allPts);
      if (allBounds.isValid()) map.fitBounds(allBounds, { padding: [30, 30] });

      // 3) Si ya existía el control, elimínalo (evita duplicado en Strict Mode)
      if (controlRef.current) {
        map.removeControl(controlRef.current);
        controlRef.current = null;
      }

      // --- Control de toggle (tipado sin any)
      const LS_KEY = "hsi-map-toggles";

      class ToggleControl extends (L.Control as {
        new (options?: { position?: ControlPosition }): LeafletControl & {
          onAdd: (map: LeafletMap) => HTMLElement;
          onRemove?: (map: LeafletMap) => void;
        };
      }) {
        options = { position: "topleft" as ControlPosition };

        onAdd = () => {
          const div = L.DomUtil.create("div", "leaflet-bar") as HTMLDivElement;
          div.style.background = "rgba(255,255,255,0.9)";
          div.style.backdropFilter = "blur(6px)";
          div.style.padding = "10px";
          div.style.borderRadius = "12px";
          div.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
          div.style.fontSize = "13px";
          div.style.lineHeight = "1.2";
          div.style.minWidth = "180px";
          L.DomEvent.disableClickPropagation(div);

          const dot = (color: string) =>
            `<span style="display:inline-block;width:10px;height:10px;border-radius:9999px;background:${color};margin-right:8px;vertical-align:middle"></span>`;

          div.innerHTML = `
            <div style="font-weight:600;margin-bottom:6px">Service coverage</div>
            <label style="display:flex;align-items:center;gap:8px;margin-bottom:6px;cursor:pointer">
              <input id="coreToggle" type="checkbox" checked />
              ${dot("#0D1B2A")} <span>Core</span>
            </label>
            <label style="display:flex;align-items:center;gap:8px;margin-bottom:6px;cursor:pointer">
              <input id="reqToggle" type="checkbox" checked />
              ${dot("#FF7A00")} <span>By request</span>
            </label>
            <button id="fitBtn" type="button"
              style="width:100%;margin-top:6px;border:none;border-radius:10px;padding:6px 8px;font-weight:600;cursor:pointer;background:#0D1B2A;color:white">
              Fit
            </button>
          `;

          const coreToggle = div.querySelector("#coreToggle") as HTMLInputElement | null;
          const reqToggle = div.querySelector("#reqToggle") as HTMLInputElement | null;
          const fitBtn = div.querySelector("#fitBtn") as HTMLButtonElement | null;

          // Estado inicial desde LS
          const initial = { core: true, req: true } as { core: boolean; req: boolean };
          try {
            const saved = localStorage.getItem(LS_KEY);
            if (saved) {
              const parsed = JSON.parse(saved) as Partial<{ core: boolean; req: boolean }>;
              if (typeof parsed.core === "boolean") initial.core = parsed.core;
              if (typeof parsed.req === "boolean") initial.req = parsed.req;
            }
          } catch {
            /* noop */
          }

          if (coreToggle) coreToggle.checked = initial.core;
          if (reqToggle) reqToggle.checked = initial.req;

          const updateVisibility = () => {
            if (!groupsRef.current) return;
            const { core, req } = groupsRef.current;

            if (coreToggle?.checked) {
              if (!map.hasLayer(core)) core.addTo(map);
            } else {
              if (map.hasLayer(core)) map.removeLayer(core);
            }

            if (reqToggle?.checked) {
              if (!map.hasLayer(req)) req.addTo(map);
            } else {
              if (map.hasLayer(req)) map.removeLayer(req);
            }

            try {
              localStorage.setItem(
                LS_KEY,
                JSON.stringify({
                  core: Boolean(coreToggle?.checked),
                  req: Boolean(reqToggle?.checked),
                })
              );
            } catch {
              /* noop */
            }
          };

          const doFit = () => {
            const pts: [number, number][] = [];
            if (coreToggle?.checked) CORE.forEach((c) => pts.push([c.lat, c.lng]));
            if (reqToggle?.checked) BY_REQUEST.forEach((c) => pts.push([c.lat, c.lng]));
            if (!pts.length) return;
            const b = L.latLngBounds(pts);
            if (b.isValid()) map.fitBounds(b, { padding: [30, 30] });
          };

          // Estado inicial aplicado
          updateVisibility();

          coreToggle?.addEventListener("change", updateVisibility);
          reqToggle?.addEventListener("change", updateVisibility);
          fitBtn?.addEventListener("click", (_ev: MouseEvent) => doFit());

          return div;
        }
      }

      const control = new ToggleControl({ position: "topleft" });
      controlRef.current = control;
      map.addControl(control);
    })();

    // Cleanup REAL entre montajes en Strict Mode
    return () => {
      mounted = false;
      const map = mapRef.current;
      if (map && controlRef.current) {
        map.removeControl(controlRef.current);
        controlRef.current = null;
      }
      if (groupsRef.current) {
        const { core, req } = groupsRef.current;
        core.remove();
        req.remove();
        groupsRef.current = null;
      }
    };
  }, []);

  // IMPORTANTE: el padre define la altura; aquí usamos h-full.
  return (
    <div className="relative z-0"> {/* keeps the whole map stack under the navbar */}
      <div
        ref={containerRef}
        className="h-[600px] w-full rounded-2xl overflow-hidden shadow-sm border border-white/10 z-0"
      />
    </div>
  );
}
