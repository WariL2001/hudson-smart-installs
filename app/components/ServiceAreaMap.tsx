"use client";

import { useEffect, useRef } from "react";

/**
 * Leaflet map with two toggleable layers:
 * - Core (navy)
 * - By request (orange)
 * Includes a custom control with checkboxes + "Fit" button.
 */
export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);       // L.Map
  const groupsRef = useRef<{ core: any; req: any } | null>(null); // L.LayerGroup
  const controlRef = useRef<any>(null); // L.Control


  useEffect(() => {
    let mounted = true;
  
    (async () => {
      const L = await import("leaflet");
      if (!mounted || !containerRef.current) return;
  
      // 1) Crea el mapa una sola vez
      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          center: [40.7357, -74.1724],
          zoom: 10,
          scrollWheelZoom: false,
        });
  
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
          maxZoom: 19,
        }).addTo(mapRef.current);
      }
  
      const map = mapRef.current as any;
  
      // 2) Si ya existían grupos (por doble-montaje), quítalos antes de volver a crearlos
      if (groupsRef.current) {
        const { core, req } = groupsRef.current;
        try {
          if (core) core.remove();
          if (req) req.remove();
        } catch {}
        groupsRef.current = null;
      }
  
      // --- Estilos
      const coreStyle: any = {
        radius: 8,
        color: "#0D1B2A",
        fillColor: "#0D1B2A",
        fillOpacity: 0.9,
        weight: 1,
      };
      const reqStyle: any = {
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
      const coreGroup = (L as any).layerGroup();
      const reqGroup  = (L as any).layerGroup();
  
      CORE.forEach((c) =>
        (L as any)
          .circleMarker([c.lat, c.lng], coreStyle)
          .bindTooltip(c.name, { permanent: false, direction: "top" })
          .addTo(coreGroup)
      );
      BY_REQUEST.forEach((c) =>
        (L as any)
          .circleMarker([c.lat, c.lng], reqStyle)
          .bindTooltip(c.name, { permanent: false, direction: "top" })
          .addTo(reqGroup)
      );
  
      coreGroup.addTo(map);
      reqGroup.addTo(map);
  
      groupsRef.current = { core: coreGroup, req: reqGroup };
  
      // --- Ajusta bounds a lo visible
      const allBounds = (L as any).latLngBounds([
        ...CORE.map((c) => [c.lat, c.lng]),
        ...BY_REQUEST.map((c) => [c.lat, c.lng]),
      ]);
      if (allBounds.isValid()) map.fitBounds(allBounds, { padding: [30, 30] });
  
      // 3) Si ya existía el control, elimínalo (evita duplicado en Strict Mode)
      if (controlRef.current) {
        try {
          map.removeControl(controlRef.current);
        } catch {}
        controlRef.current = null;
      }
  
      // --- Control de toggle

      const LS_KEY = "hsi-map-toggles";
      const ToggleControl = (L as any).Control.extend({
        options: { position: "topleft" as const },
        onAdd: function () {
            const div = L.DomUtil.create("div", "leaflet-bar");
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
          
            const coreToggle = div.querySelector("#coreToggle") as HTMLInputElement;
            const reqToggle  = div.querySelector("#reqToggle")  as HTMLInputElement;
            const fitBtn     = div.querySelector("#fitBtn")     as HTMLButtonElement;
          
            // ⬇️ Cargar estado guardado (LS)
            let initial = { core: true, req: true };
            try {
              const saved = localStorage.getItem(LS_KEY);
              if (saved) {
                const parsed = JSON.parse(saved);
                if (typeof parsed.core === "boolean") initial.core = parsed.core;
                if (typeof parsed.req  === "boolean") initial.req  = parsed.req;
              }
            } catch {}
            coreToggle.checked = initial.core;
            reqToggle.checked  = initial.req;
          
            const updateVisibility = () => {
              if (!groupsRef.current) return;
              const { core, req } = groupsRef.current;
          
              if (coreToggle.checked) {
                if (!map.hasLayer(core)) core.addTo(map);
              } else {
                if (map.hasLayer(core)) map.removeLayer(core);
              }
          
              if (reqToggle.checked) {
                if (!map.hasLayer(req)) req.addTo(map);
              } else {
                if (map.hasLayer(req)) map.removeLayer(req);
              }
          
              // ⬇️ Guardar estado (LS)
              try {
                localStorage.setItem(
                  LS_KEY,
                  JSON.stringify({ core: coreToggle.checked, req: reqToggle.checked })
                );
              } catch {}
            };
          
            const doFit = () => {
              const pts: [number, number][] = [];
              if (coreToggle.checked) CORE.forEach((c) => pts.push([c.lat, c.lng]));
              if (reqToggle.checked)  BY_REQUEST.forEach((c) => pts.push([c.lat, c.lng]));
              if (!pts.length) return;
              const b = L.latLngBounds(pts);
              if (b.isValid()) map.fitBounds(b, { padding: [30, 30] });
            };
          
            // Estado inicial aplicado
            updateVisibility();
          
            coreToggle.addEventListener("change", updateVisibility);
            reqToggle.addEventListener("change", updateVisibility);
            fitBtn.addEventListener("click", doFit);
          
            return div;
          }
          ,
      });
  
      const control = new ToggleControl();
      controlRef.current = control;
      map.addControl(control);
    })();
  
    // Cleanup REAL del useEffect (se ejecuta entre montajes en Strict Mode)
    return () => {
      mounted = false;
      const map = mapRef.current as any;
      try {
        if (controlRef.current && map) {
          map.removeControl(controlRef.current);
          controlRef.current = null;
        }
        if (groupsRef.current) {
          const { core, req } = groupsRef.current;
          if (core) core.remove();
          if (req) req.remove();
          groupsRef.current = null;
        }
      } catch {}
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full rounded-2xl overflow-hidden shadow-sm border border-white/10"
    />
  );
}
