"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Navigation, MapPin, ExternalLink, Search } from "lucide-react";

// --- Fix Leaflet Default Icon Issue ---
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// --- Mock Data ---
const LOCATIONS = [
  { id: 1, name: "CBE Head Office", bank: "CBE", lat: 9.016, lng: 38.752, type: "Branch" },
  { id: 2, name: "Awash Bank Bole", bank: "Awash", lat: 8.996, lng: 38.789, type: "ATM + Branch" },
  { id: 3, name: "Dashen Kazanchis", bank: "Dashen", lat: 9.021, lng: 38.773, type: "ATM" },
  { id: 4, name: "CBE Piassa", bank: "CBE", lat: 9.035, lng: 38.751, type: "Branch" },
];

function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 14);
  }, [lat, lng, map]);
  return null;
}

export default function BankMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedBank, setSelectedBank] = useState("All");

  const filteredLocations = selectedBank === "All" 
    ? LOCATIONS 
    : LOCATIONS.filter(l => l.bank === selectedBank);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => alert("Could not access location. Please enable GPS.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const openExternalMap = (query: string) => {
    // If user has location, we can do a "Near Me" search more accurately
    let url = `https://www.google.com/maps/search/?api=1&query=${query}+ATM`;
    
    // If we have precise coords, center the search there
    if (userLocation) {
        url += `&center=${userLocation.lat},${userLocation.lng}`;
    } else {
        url += `+Ethiopia`; // Default context
    }
    
    window.open(url, "_blank");
  };

  return (
    // GRID LAYOUT: Stacks on mobile, Side-by-side on desktop
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-background rounded-xl overflow-hidden border shadow-sm">
      
      {/* --- Sidebar (Controls) --- */}
      <div className="lg:col-span-1 p-6 bg-card-background flex flex-col gap-6 order-1">
        <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <MapPin className="text-primary" /> Filter Map
            </h3>
            
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Select Bank</label>
            <div className="relative">
                <select 
                    className="w-full p-2.5 rounded-md border bg-background appearance-none cursor-pointer hover:border-primary transition-colors"
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                >
                    <option value="All">Show All Banks</option>
                    <option value="CBE">Commercial Bank (CBE)</option>
                    <option value="Awash">Awash Bank</option>
                    <option value="Dashen">Dashen Bank</option>
                </select>
                {/* Custom arrow for select */}
                <div className="absolute right-3 top-3 pointer-events-none opacity-50">▼</div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
            <button 
                onClick={handleLocateMe}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-bold transition-all shadow-md active:scale-95"
            >
                <Navigation size={18} /> Use My Location
            </button>
            <p className="text-xs text-muted-foreground text-center">
                Centers map on your current position.
            </p>
        </div>

        <hr className="border-border" />

        {/* Deep Links Section */}
        <div>
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                <Search size={16} /> Open in Google Maps
            </h4>
            <div className="grid grid-cols-1 gap-2">
                <button onClick={() => openExternalMap("CBE")} className="text-sm text-left px-3 py-2 border rounded-md hover:bg-muted transition-colors flex justify-between items-center group">
                    Find Nearest CBE ATM <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                </button>
                <button onClick={() => openExternalMap("Awash Bank")} className="text-sm text-left px-3 py-2 border rounded-md hover:bg-muted transition-colors flex justify-between items-center group">
                    Find Nearest Awash ATM <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                </button>
                <button onClick={() => openExternalMap("Dashen Bank")} className="text-sm text-left px-3 py-2 border rounded-md hover:bg-muted transition-colors flex justify-between items-center group">
                    Find Nearest Dashen ATM <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                </button>
            </div>
        </div>
      </div>

      {/* --- The Map Area --- */}
      <div className="lg:col-span-3 h-125 lg:h-175 w-full relative z-0 order-2 border-t lg:border-t-0 lg:border-l border-border">
        <MapContainer 
            center={[9.0192, 38.7525]} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{ height: "100%", width: "100%" }}
            className="z-0" // Ensure low z-index
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {userLocation && (
            <>
                <Marker position={[userLocation.lat, userLocation.lng]} icon={icon}>
                <Popup>You are here</Popup>
                </Marker>
                <RecenterMap lat={userLocation.lat} lng={userLocation.lng} />
            </>
            )}

            {filteredLocations.map((loc) => (
            <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={icon}>
                <Popup>
                <div className="p-1 min-w-37.5">
                    <h4 className="font-bold text-base">{loc.name}</h4>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full mb-2 border">
                        {loc.type}
                    </span>
                    <button 
                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`, "_blank")}
                        className="w-full mt-2 text-xs flex items-center justify-center gap-1 bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition-colors"
                    >
                        Get Directions <Navigation size={10} />
                    </button>
                </div>
                </Popup>
            </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}