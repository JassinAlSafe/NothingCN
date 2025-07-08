"use client";

import { ComponentPreview } from "@/components/component-preview";
import { NothingCalendar } from "@/components/ui/nothing-calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComponentCode } from "@/components/component-code";

export default function NothingCalendarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Nothing Calendar</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Authentic Nothing OS calendar widgets with dot matrix typography, weather integration, 
          and event indicators. Perfect for dashboards, home screens, and time-sensitive applications.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Calendar */}
        <ComponentPreview
          title="Basic Calendar"
          description="Clean, minimal calendar with Nothing OS aesthetic"
          preview={
            <div className="flex items-center justify-center p-8">
              <NothingCalendar 
                date={new Date(2024, 3, 23)} // April 23, 2024
                time="10:30"
                showAlarm={true}
                weather={{
                  temperature: 21,
                  condition: "sunny"
                }}
                events={[
                  {
                    id: "1",
                    title: "25th Placeholder event",
                    date: 25,
                    color: "red"
                  }
                ]}
              />
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function BasicCalendarExample() {
  return (
    <NothingCalendar 
      date={new Date(2024, 3, 23)} // April 23, 2024
      time="10:30"
      showAlarm={true}
      weather={{
        temperature: 21,
        condition: "sunny"
      }}
      events={[
        {
          id: "1",
          title: "25th Placeholder event",
          date: 25,
          color: "red"
        }
      ]}
    />
  );
}`}
        />

        {/* Dark Theme */}
        <ComponentPreview
          title="Dark Theme"
          description="Nothing OS calendar with dark mode styling"
          preview={
            <div className="flex items-center justify-center p-8 bg-gray-900 rounded-lg">
              <NothingCalendar 
                variant="dark"
                date={new Date(2024, 3, 23)} // April 23, 2024
                time="10:30"
                showAlarm={true}
                weather={{
                  temperature: 21,
                  condition: "cloudy"
                }}
                events={[
                  {
                    id: "1",
                    title: "Team Meeting",
                    date: 23,
                    color: "blue"
                  },
                  {
                    id: "2",
                    title: "Project Review",
                    date: 23,
                    color: "green"
                  }
                ]}
              />
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function DarkCalendarExample() {
  return (
    <NothingCalendar 
      variant="dark"
      date={new Date(2024, 3, 23)}
      time="10:30"
      showAlarm={true}
      weather={{
        temperature: 21,
        condition: "cloudy"
      }}
      events={[
        {
          id: "1",
          title: "Team Meeting",
          date: 23,
          color: "blue"
        },
        {
          id: "2",
          title: "Project Review", 
          date: 23,
          color: "green"
        }
      ]}
    />
  );
}`}
        />

        {/* Weather Conditions */}
        <ComponentPreview
          title="Weather Conditions"
          description="Different weather states with dot matrix icons"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
              <NothingCalendar 
                size="sm"
                date={new Date(2024, 3, 23)}
                weather={{
                  temperature: 24,
                  condition: "sunny"
                }}
                time="09:15"
              />
              <NothingCalendar 
                size="sm"
                date={new Date(2024, 3, 24)}
                weather={{
                  temperature: 18,
                  condition: "cloudy"
                }}
                time="09:15"
              />
              <NothingCalendar 
                size="sm"
                date={new Date(2024, 3, 25)}
                weather={{
                  temperature: 16,
                  condition: "rainy"
                }}
                time="09:15"
              />
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function WeatherExample() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <NothingCalendar 
        size="sm"
        weather={{ temperature: 24, condition: "sunny" }}
        time="09:15"
      />
      <NothingCalendar 
        size="sm"
        weather={{ temperature: 18, condition: "cloudy" }}
        time="09:15"
      />
      <NothingCalendar 
        size="sm"
        weather={{ temperature: 16, condition: "rainy" }}
        time="09:15"
      />
    </div>
  );
}`}
        />

        {/* Stacked Layout */}
        <ComponentPreview
          title="Stacked Layout"
          description="Multiple calendar cards with authentic Nothing OS depth"
          preview={
            <div className="flex items-center justify-center p-8">
              <div className="relative">
                {/* Back card */}
                <div className="absolute -top-4 -right-4 rotate-12 opacity-60">
                  <NothingCalendar 
                    variant="dark"
                    date={new Date(2024, 3, 24)}
                    time="10:30"
                    weather={{
                      temperature: 19,
                      condition: "cloudy"
                    }}
                    events={[
                      {
                        id: "1",
                        title: "Placeholder event",
                        date: 24,
                        color: "purple"
                      }
                    ]}
                  />
                </div>
                
                {/* Front card */}
                <NothingCalendar 
                  date={new Date(2024, 3, 23)}
                  time="10:30"
                  showAlarm={true}
                  weather={{
                    temperature: 21,
                    condition: "sunny"
                  }}
                  events={[
                    {
                      id: "1",
                      title: "25th Placeholder event",
                      date: 25,
                      color: "red"
                    }
                  ]}
                />
              </div>
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function StackedCalendarExample() {
  return (
    <div className="relative">
      {/* Back card */}
      <div className="absolute -top-4 -right-4 rotate-12 opacity-60">
        <NothingCalendar 
          variant="dark"
          date={new Date(2024, 3, 24)}
          time="10:30"
          weather={{
            temperature: 19,
            condition: "cloudy"
          }}
          events={[
            {
              id: "1",
              title: "Placeholder event",
              date: 24,
              color: "purple"
            }
          ]}
        />
      </div>
      
      {/* Front card */}
      <NothingCalendar 
        date={new Date(2024, 3, 23)}
        time="10:30"
        showAlarm={true}
        weather={{
          temperature: 21,
          condition: "sunny"
        }}
        events={[
          {
            id: "1",
            title: "25th Placeholder event",
            date: 25,
            color: "red"
          }
        ]}
      />
    </div>
  );
}`}
        />

        {/* Event Management */}
        <ComponentPreview
          title="Event Management"
          description="Multiple events with different colors and indicators"
          preview={
            <div className="flex items-center justify-center p-8">
              <NothingCalendar 
                date={new Date(2024, 3, 23)}
                time="14:30"
                weather={{
                  temperature: 22,
                  condition: "sunny"
                }}
                events={[
                  {
                    id: "1",
                    title: "Morning standup",
                    date: 23,
                    color: "blue"
                  },
                  {
                    id: "2", 
                    title: "Design review",
                    date: 23,
                    color: "green"
                  },
                  {
                    id: "3",
                    title: "Client call",
                    date: 23,
                    color: "red"
                  }
                ]}
              />
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function EventManagementExample() {
  return (
    <NothingCalendar 
      date={new Date(2024, 3, 23)}
      time="14:30"
      weather={{
        temperature: 22,
        condition: "sunny"
      }}
      events={[
        {
          id: "1",
          title: "Morning standup",
          date: 23,
          color: "blue"
        },
        {
          id: "2", 
          title: "Design review",
          date: 23,
          color: "green"
        },
        {
          id: "3",
          title: "Client call",
          date: 23,
          color: "red"
        }
      ]}
    />
  );
}`}
        />
      </div>

      {/* Component Source Code */}
      <ComponentCode
        title="Component Source"
        description="Copy and paste the following code into your project."
        code={`"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlarmClock } from "lucide-react";
import { AnimatedSun } from "./icons/animated-sun";
import { AnimatedCloud } from "./icons/animated-cloud";
import { AnimatedRain } from "./icons/animated-rain";

export interface NothingCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: Date;
  weather?: {
    temperature: number;
    condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";
  };
  events?: Array<{
    id: string;
    title: string;
    date: number;
    color?: "red" | "green" | "blue" | "purple" | "orange" | "yellow";
  }>;
  time?: string;
  showAlarm?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const NothingCalendar = React.forwardRef<HTMLDivElement, NothingCalendarProps>(
  ({ 
    className,
    date = new Date(),
    weather,
    events = [],
    time,
    showAlarm = false,
    variant = "light",
    size = "md",
    ...props 
  }, ref) => {
    
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dayNumber = date.getDate();
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    
    const sizeClasses = {
      sm: "w-64 h-72",
      md: "w-80 h-88", 
      lg: "w-96 h-96"
    };

    const getWeatherIcon = (condition: string) => {
      switch (condition) {
        case "sunny":
          return <AnimatedSun width={24} height={24} animate={true} className="text-red-500" />;
        case "cloudy":
          return <AnimatedCloud width={24} height={24} animate={true} className="text-red-500" />;
        case "rainy":
          return <AnimatedRain width={24} height={24} animate={true} className="text-red-500" />;
        case "snowy":
          return <AnimatedCloud width={24} height={24} animate={true} className="text-red-500" />;
        case "stormy":
          return <AnimatedRain width={24} height={24} animate={true} className="text-red-500" />;
        default:
          return <AnimatedSun width={24} height={24} animate={true} className="text-red-500" />;
      }
    };

    const todayEvents = events.filter(event => event.date === dayNumber);

    return (
      <div 
        ref={ref}
        className={cn(
          "relative rounded-3xl border-2 transition-all duration-300 hover:shadow-lg",
          sizeClasses[size],
          variant === "light" 
            ? "bg-white border-gray-200 text-gray-900 shadow-md" 
            : "bg-gray-900 border-gray-700 text-white shadow-xl",
          className
        )}
        {...props}
      >
        {/* Time and Weather Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          {time && (
            <div className="flex items-center space-x-2">
              {showAlarm && (
                <AlarmClock className="w-4 h-4 text-red-500" />
              )}
              <span className="text-sm font-ndot text-red-500">{time}</span>
            </div>
          )}
          
          {weather && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-ndot">{weather.temperature}°</span>
              {getWeatherIcon(weather.condition)}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl font-ndot font-bold tracking-wider mb-2">
            {dayName}
          </div>
          
          <div className="text-lg font-medium mb-8">
            {dayNumber} {monthName}
          </div>

          {/* Events */}
          {todayEvents.length > 0 && (
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              {todayEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full flex-shrink-0",
                    event.color === "red" && "bg-red-500",
                    event.color === "green" && "bg-green-500",
                    event.color === "blue" && "bg-blue-500",
                    event.color === "purple" && "bg-purple-500",
                    event.color === "orange" && "bg-orange-500",
                    event.color === "yellow" && "bg-yellow-500",
                    !event.color && "bg-red-500"
                  )} />
                  <span className="text-sm font-medium truncate">{event.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nothing OS corner dots */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
      </div>
    );
  }
);

NothingCalendar.displayName = "NothingCalendar";

export { NothingCalendar };`}
      />

      {/* Design Philosophy */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 font-ndot">🎨 Nothing OS Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Visual Design</h3>
            <ul className="space-y-2">
              <li>• **Dot Matrix Typography** - Strategic use of font-ndot for day names</li>
              <li>• **Weather Icons** - Authentic dot matrix patterns for weather conditions</li>
              <li>• **Color Coding** - Red accent for time and weather elements</li>
              <li>• **Rounded Corners** - Smooth, modern card aesthetic</li>
              <li>• **Subtle Shadows** - Depth without overwhelming the design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Functionality</h3>
            <ul className="space-y-2">
              <li>• **Event Management** - Color-coded event indicators</li>
              <li>• **Weather Integration** - Temperature and condition display</li>
              <li>• **Time Display** - Current time with optional alarm icon</li>
              <li>• **Theme Support** - Light and dark mode variants</li>
              <li>• **Responsive Sizing** - Multiple size options for different use cases</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}