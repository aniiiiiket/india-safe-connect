
import MainLayout from '@/components/layout/MainLayout';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from '@/components/ui/button';
import { MapPin, Filter, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

// Need to import leaflet for marker icons to work correctly
import L from 'leaflet';

// Fix the marker icon issue
const fixLeafletIcon = () => {
  // Fix the default icon paths that are broken in production build
  delete L.Icon.Default.prototype._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

const SafetyMap = () => {
  // Define center position for India
  const position: [number, number] = [20.5937, 78.9629];
  const zoom = 5;
  
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-police-navy">Safety Heatmap</h1>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Card className="absolute left-4 top-4 z-[400] p-4 w-64">
            <h3 className="font-semibold mb-2">Safety Levels</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded bg-green-500 mr-2" />
                <span className="text-sm">Safe Zone</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded bg-yellow-500 mr-2" />
                <span className="text-sm">Moderate Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded bg-red-500 mr-2" />
                <span className="text-sm">High Risk</span>
              </div>
            </div>
          </Card>

          {/* Map container */}
          <div className="h-full w-full">
            <MapContainer 
              center={position} 
              zoom={zoom} 
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* Example markers for different safety zones */}
              <Marker position={[28.6139, 77.2090]}>
                <Popup>
                  Delhi - Moderate Risk Area
                </Popup>
              </Marker>
              <Marker position={[19.0760, 72.8777]}>
                <Popup>
                  Mumbai - Safe Zone
                </Popup>
              </Marker>
              <Marker position={[13.0827, 80.2707]}>
                <Popup>
                  Chennai - High Risk Area
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyMap;
