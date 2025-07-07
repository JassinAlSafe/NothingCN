import { ComponentPreview } from "@/components/component-preview";
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function PixelWeatherCardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Pixel Weather Card</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A static pixel art weather card component featuring your original cloud SVG design, dot-matrix style graphics, 
          and app-themed colors. Perfect for clean weather displays and minimalist interfaces.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Example */}
        <ComponentPreview
          title="Basic Pixel Weather Card"
          description="Default showers condition with 14° temperature using original cloud SVG"
          preview={
            <div className="flex items-center justify-center p-8">
              <PixelWeatherCard />
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <PixelWeatherCard />
    </div>
  );
}`}
        />

        {/* Different Temperatures */}
        <ComponentPreview
          title="Different Temperatures"
          description="Various temperature displays with dot-matrix numbers"
          preview={
            <div className="flex items-center justify-center gap-6 p-8 flex-wrap">
              <PixelWeatherCard temperature={5} />
              <PixelWeatherCard temperature={23} />
              <PixelWeatherCard temperature={-2} />
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <PixelWeatherCard temperature={5} />
      <PixelWeatherCard temperature={23} />
      <PixelWeatherCard temperature={-2} />
    </div>
  );
}`}
        />

        {/* Different Conditions */}
        <ComponentPreview
          title="Weather Conditions"
          description="Different weather condition labels"
          preview={
            <div className="flex items-center justify-center gap-6 p-8 flex-wrap">
              <PixelWeatherCard condition="showers" temperature={14} />
              <PixelWeatherCard condition="sunny" temperature={25} />
              <PixelWeatherCard condition="cloudy" temperature={18} />
              <PixelWeatherCard condition="stormy" temperature={12} />
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <PixelWeatherCard condition="showers" temperature={14} />
      <PixelWeatherCard condition="sunny" temperature={25} />
      <PixelWeatherCard condition="cloudy" temperature={18} />
      <PixelWeatherCard condition="stormy" temperature={12} />
    </div>
  );
}`}
        />

        {/* Rain Display Control */}
        <ComponentPreview
          title="Rain Display Control"
          description="Show or hide static rain drops"
          preview={
            <div className="flex items-center justify-center gap-6 p-8">
              <div className="text-center space-y-4">
                <PixelWeatherCard showRain={false} />
                <p className="text-muted-foreground text-sm">No Rain</p>
              </div>
              <div className="text-center space-y-4">
                <PixelWeatherCard showRain={true} />
                <p className="text-muted-foreground text-sm">With Rain</p>
              </div>
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <div className="text-center space-y-4">
        <PixelWeatherCard showRain={false} />
        <p className="text-muted-foreground text-sm">No Rain</p>
      </div>
      <div className="text-center space-y-4">
        <PixelWeatherCard showRain={true} />
        <p className="text-muted-foreground text-sm">With Rain</p>
      </div>
    </div>
  );
}`}
        />

        {/* Custom Styling */}
        <ComponentPreview
          title="Custom Styling"
          description="Customized colors and dimensions"
          preview={
            <div className="flex items-center justify-center gap-6 p-8">
              <PixelWeatherCard 
                temperature={22}
                condition="sunny"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
              />
              <PixelWeatherCard 
                temperature={8}
                condition="stormy"
                className="bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300"
              />
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <PixelWeatherCard 
        temperature={22}
        condition="sunny"
        className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-400"
      />
      <PixelWeatherCard 
        temperature={8}
        condition="stormy"
        className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-400"
      />
    </div>
  );
}`}
        />

        {/* Interactive Example */}
        <ComponentPreview
          title="Gaming Interface Example"
          description="Multiple weather cards in a retro gaming style interface"
          preview={
            <div className="p-8 bg-black rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <PixelWeatherCard temperature={14} condition="showers" />
                <PixelWeatherCard temperature={22} condition="sunny" />
                <PixelWeatherCard temperature={7} condition="cloudy" />
                <PixelWeatherCard temperature={-3} condition="stormy" />
                <PixelWeatherCard temperature={19} condition="showers" />
                <PixelWeatherCard temperature={26} condition="sunny" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-green-400 font-mono text-lg mb-2">WEATHER FORECAST</h3>
                <p className="text-green-300 font-mono text-sm">SELECT LOCATION TO VIEW DETAILS</p>
              </div>
            </div>
          }
          code={`import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="p-8 bg-black rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <PixelWeatherCard temperature={14} condition="showers" />
        <PixelWeatherCard temperature={22} condition="sunny" />
        <PixelWeatherCard temperature={7} condition="cloudy" />
        <PixelWeatherCard temperature={-3} condition="stormy" />
        <PixelWeatherCard temperature={19} condition="showers" />
        <PixelWeatherCard temperature={26} condition="sunny" />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-green-400 font-mono text-lg mb-2">WEATHER FORECAST</h3>
        <p className="text-green-300 font-mono text-sm">SELECT LOCATION TO VIEW DETAILS</p>
      </div>
    </div>
  );
}`}
        />
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• **Original cloud SVG** from your design file integrated seamlessly</li>
          <li>• **Static rain drops** with clean positioning and app-themed colors</li>
          <li>• **Custom temperature display** using dot-matrix number patterns (0-9)</li>
          <li>• **Multiple weather conditions** (showers, sunny, cloudy, stormy)</li>
          <li>• **App theme integration** using CSS custom properties</li>
          <li>• **Rain display toggle** for clean customization</li>
          <li>• **Responsive design** that works across different screen sizes</li>
          <li>• **Minimalist aesthetics** perfect for modern interfaces</li>
          <li>• **Degree symbol rendering** in dot-matrix style</li>
          <li>• **Theme-aware colors** with light/dark mode support</li>
        </ul>
      </div>
    </div>
  );
}