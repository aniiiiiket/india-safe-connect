
import MainLayout from '@/components/layout/MainLayout';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from '@/components/ui/button';
import { MapPin, Filter, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SafetyMap = () => {
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
            <Map center={[20.5937, 78.9629]} zoom={5} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </Map>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyMap;
