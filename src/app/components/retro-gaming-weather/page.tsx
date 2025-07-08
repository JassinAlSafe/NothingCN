import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { temp: 14, condition: "showers" as const, sector: "A1", name: "NEW_TOKYO", coord: "35.6762N", theme: "green" },
  { temp: 22, condition: "sunny" as const, sector: "B2", name: "CYBER_VEGAS", coord: "36.1699N", theme: "green" },
  { temp: 7, condition: "cloudy" as const, sector: "C3", name: "ARCTIC_BASE", coord: "71.0486N", theme: "green" },
  { temp: -3, condition: "stormy" as const, sector: "D4", name: "STORM_ZONE", coord: "41.8781N", theme: "yellow" },
  { temp: 12, condition: "clear-night" as const, sector: "E5", name: "MOON_STATION", coord: "LUNAR_SOUTH", theme: "purple" },
  { temp: 26, condition: "sunny" as const, sector: "F6", name: "DESERT_CITY", coord: "33.4484N", theme: "orange" }
];

export default function RetroGamingWeatherPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Navigation */}
      <div className="p-6 border-b border-green-500/30">
        <Button variant="ghost" asChild className="text-green-400 hover:text-green-300 hover:bg-green-500/10">
          <Link href="/components/pixel-weather-card" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Pixel Weather Card
          </Link>
        </Button>
      </div>

      {/* Main Interface */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold font-mono text-green-400 mb-4 tracking-wider">
              RETRO GAMING WEATHER CONSOLE
            </h1>
            <p className="text-green-300 font-mono text-lg">
              IMMERSIVE WEATHER MONITORING SYSTEM • CYBERPUNK AESTHETIC • REAL-TIME DATA
            </p>
          </div>

          {/* Main Gaming Console Interface */}
          <div className="p-8 bg-gradient-to-b from-gray-900 to-black rounded-lg border-2 border-green-500/30 relative overflow-hidden">
            {/* Scan lines effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" 
                 style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.03) 2px, rgba(34, 197, 94, 0.03) 4px)' }} />
            
            {/* Terminal Header */}
            <div className="mb-8 border-b border-green-500/30 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-green-400 font-mono text-2xl font-bold tracking-wider">WEATHER_SYSTEM_V2.1</h2>
                </div>
                <div className="flex items-center gap-3 text-green-400 font-mono">
                  <span>STATUS:</span>
                  <span className="text-green-300">ONLINE</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-green-300 font-mono text-sm">
                LOCATION_SCANNER_ACTIVE // 6_REGIONS_DETECTED // REAL_TIME_MONITORING // CYBERPUNK_MODE_ENABLED
              </div>
              <div className="text-green-500 font-mono text-xs mt-2">
                INITIALIZED: 2087.03.14 // LAST_UPDATE: 0.003s // PING: 12ms // ENCRYPTION: AES-256
              </div>
            </div>

            {/* Weather Grid with Enhanced Gaming Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
              {locations.map((location, index) => (
                <div key={index} className="relative group">
                  {/* Enhanced Sector Labels */}
                  <div className={`absolute -top-4 left-3 bg-black px-3 py-1.5 border-2 border-${location.theme}-500/50 rounded-md z-10 shadow-lg`}>
                    <span className={`text-${location.theme}-400 font-mono text-sm font-bold tracking-wider`}>
                      {location.theme === 'yellow' ? 'ALERT_' : location.theme === 'purple' ? 'NIGHT_' : 'SECTOR_'}{location.sector}
                    </span>
                  </div>
                  
                  {/* Weather Card with Enhanced Hover */}
                  <PixelWeatherCard 
                    temperature={location.temp} 
                    condition={location.condition} 
                    className={`transform hover:scale-105 transition-all duration-500 hover:border-${location.theme}-400/70 hover:shadow-lg hover:shadow-${location.theme}-500/20 group-hover:translate-y-1`} 
                  />
                  
                  {/* Enhanced Location Info */}
                  <div className="mt-4 text-center space-y-2">
                    <div className={`text-${location.theme}-300 font-mono text-lg font-bold tracking-wider`}>
                      {location.name}
                    </div>
                    <div className={`text-${location.theme}-500 font-mono text-sm`}>
                      COORD: {location.coord}
                    </div>
                    <div className={`text-${location.theme}-600 font-mono text-xs`}>
                      STATUS: {location.theme === 'yellow' ? 'HIGH ALERT' : location.theme === 'purple' ? 'NIGHT OPS' : 'MONITORING'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Gaming Console Footer */}
            <div className="border-t border-green-500/30 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Navigation Controls */}
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-1">[↑↓] NAVIGATE SECTORS</div>
                  <div className="mb-1">[ENTER] SELECT LOCATION</div>
                  <div>[ESC] EXIT SYSTEM</div>
                </div>
                
                {/* System Stats */}
                <div className="text-center">
                  <div className="flex justify-center items-center gap-6 text-xs font-mono">
                    <div className="text-green-500">CPU: 87%</div>
                    <div className="text-green-500">MEM: 2.1GB</div>
                    <div className="text-green-500">GPU: 94%</div>
                  </div>
                  <div className="text-green-600 text-xs font-mono mt-1">
                    UPTIME: 72:14:33 • NET: 847ms
                  </div>
                </div>
                
                {/* Additional Controls */}
                <div className="text-green-400 font-mono text-sm text-right">
                  <div className="mb-1">[F1] HELP SYSTEM</div>
                  <div className="mb-1">[F5] REFRESH DATA</div>
                  <div>[F11] FULLSCREEN</div>
                </div>
              </div>
              
              {/* Status Bar */}
              <div className="text-center">
                <div className="text-green-400 font-mono text-lg animate-pulse mb-2">
                  → REAL_TIME_WEATHER_MONITORING_ACTIVE ←
                </div>
                <div className="text-green-600 font-mono text-xs">
                  QUANTUM_WEATHER_PREDICTION_ENGINE • SATELLITE_LINK_ESTABLISHED • AI_ANALYSIS_RUNNING
                </div>
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-green-500/20">
            <h3 className="text-green-400 font-mono text-xl font-bold mb-4">SYSTEM DOCUMENTATION</h3>
            <div className="grid md:grid-cols-2 gap-6 text-green-300 font-mono text-sm">
              <div>
                <h4 className="text-green-400 font-bold mb-2">FEATURES:</h4>
                <ul className="space-y-1">
                  <li>• Real-time weather monitoring across 6 sectors</li>
                  <li>• Advanced pixel-art weather visualization</li>
                  <li>• Color-coded threat level system</li>
                  <li>• Interactive hover effects and animations</li>
                  <li>• Retro CRT scan line effects</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">TECHNICAL SPECS:</h4>
                <ul className="space-y-1">
                  <li>• Next.js 15 + React 19 architecture</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Custom pixel weather card components</li>
                  <li>• Responsive grid layout system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}