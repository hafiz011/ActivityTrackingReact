// components/MapView.tsx
"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dayjs from "dayjs";

// no imports of images
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface MapViewProps {
  activeSessions: {
    sessionid: string;
    userName: string;
    city: string;
    country: string;
    lac: string;
    loginTime: string;
  }[];
}

export const MapView: React.FC<MapViewProps> = ({ activeSessions }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "24rem", width: "100%" }}
      className="rounded-lg overflow-hidden"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />
      {activeSessions
        .filter((s) => s.lac)
        .map((s) => {
          const [lat, lng] = s.lac.split(",").map(Number);
          return (
            <Marker key={s.sessionid} position={[lat, lng]}>
              <Popup>
                <strong>{s.userName}</strong>
                <br />
                {s.city}, {s.country}
                <br />
                {dayjs(s.loginTime).format("DD-MM-YYYY hh:mm:ss A")}
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};
