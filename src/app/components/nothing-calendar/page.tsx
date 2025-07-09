"use client";

import { ComponentPreview } from "@/components/component-preview";
import { NothingCalendar } from "@/components/ui/nothing-calendar";
import { ComponentCode } from "@/components/component-code";

export default function NothingCalendarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">
          Nothing Calendar
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Authentic Nothing OS calendar widgets with dot matrix typography,
          weather integration, and event indicators. Perfect for dashboards,
          home screens, and time-sensitive applications.
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
                  condition: "sunny",
                }}
                events={[
                  {
                    id: "1",
                    title: "25th Placeholder event",
                    date: 25,
                    color: "red",
                  },
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
            <div className="flex items-center justify-center p-8">
              <NothingCalendar
                variant="dark"
                date={new Date(2024, 3, 23)} // April 23, 2024
                time="10:30"
                showAlarm={true}
                weather={{
                  temperature: 21,
                  condition: "cloudy",
                }}
                events={[
                  {
                    id: "1",
                    title: "Team Meeting",
                    date: 23,
                    color: "blue",
                  },
                  {
                    id: "2",
                    title: "Project Review",
                    date: 23,
                    color: "green",
                  },
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
                  condition: "sunny",
                }}
                time="09:15"
              />
              <NothingCalendar
                size="sm"
                date={new Date(2024, 3, 24)}
                weather={{
                  temperature: 18,
                  condition: "cloudy",
                }}
                time="09:15"
              />
              <NothingCalendar
                size="sm"
                date={new Date(2024, 3, 25)}
                weather={{
                  temperature: 16,
                  condition: "rainy",
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
                      condition: "cloudy",
                    }}
                    events={[
                      {
                        id: "1",
                        title: "Placeholder event",
                        date: 24,
                        color: "purple",
                      },
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
                    condition: "sunny",
                  }}
                  events={[
                    {
                      id: "1",
                      title: "25th Placeholder event",
                      date: 25,
                      color: "red",
                    },
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
                  condition: "sunny",
                }}
                events={[
                  {
                    id: "1",
                    title: "Morning standup",
                    date: 23,
                    color: "blue",
                  },
                  {
                    id: "2",
                    title: "Design review",
                    date: 23,
                    color: "green",
                  },
                  {
                    id: "3",
                    title: "Client call",
                    date: 23,
                    color: "red",
                  },
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

        {/* Wide Version */}
        <ComponentPreview
          title="Wide Version - 4 Zone Layout"
          description="Landscape-oriented calendar with clear information hierarchy: Day name (top-left), Weather (top-right), Date & Time (bottom-left), Events (bottom-right)"
          preview={
            <div className="space-y-6">
              <div className="flex items-center justify-center p-8">
                <NothingCalendar
                  size="wide"
                  date={new Date(2024, 3, 23)}
                  time="18:20"
                  showAlarm={true}
                  weather={{
                    temperature: 21,
                    condition: "sunny",
                  }}
                  events={[
                    {
                      id: "1",
                      title: "Morning standup",
                      date: 23,
                      color: "blue",
                    },
                    {
                      id: "2",
                      title: "Design review meeting",
                      date: 23,
                      color: "green",
                    },
                    {
                      id: "3",
                      title: "Client presentation",
                      date: 23,
                      color: "red",
                    },
                    {
                      id: "4",
                      title: "Team retrospective",
                      date: 23,
                      color: "purple",
                    },
                  ]}
                />
              </div>
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function WideCalendarExample() {
  return (
    <NothingCalendar 
      size="wide"
      date={new Date(2024, 3, 23)}
      time="18:20"
      showAlarm={true}
      weather={{
        temperature: 21,
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
          title: "Design review meeting",
          date: 23,
          color: "green"
        },
        {
          id: "3",
          title: "Client presentation",
          date: 23,
          color: "red"
        },
        {
          id: "4",
          title: "Team retrospective",
          date: 23,
          color: "purple"
        }
      ]}
    />
  );
}`}
        />

        {/* System Status Examples */}
        <ComponentPreview
          title="System Status Visibility - All Sizes"
          description="Clear handling of different system states including sync status and empty events across all calendar sizes"
          preview={
            <div className="space-y-8">
              {/* Wide Layout Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Wide Layout</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">No Events</h4>
                    <NothingCalendar
                      size="wide"
                      date={new Date(2024, 3, 24)}
                      time="10:30"
                      weather={{
                        temperature: 18,
                        condition: "cloudy",
                      }}
                      events={[]}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Sync Error</h4>
                    <NothingCalendar
                      size="wide"
                      date={new Date(2024, 3, 25)}
                      time="14:15"
                      weather={{
                        temperature: 22,
                        condition: "sunny",
                      }}
                      syncStatus="error"
                      events={[]}
                    />
                  </div>
                </div>
              </div>

              {/* Regular Size Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Regular Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Small - No Events</h4>
                    <NothingCalendar
                      size="sm"
                      date={new Date(2024, 3, 24)}
                      time="10:30"
                      weather={{
                        temperature: 18,
                        condition: "cloudy",
                      }}
                      events={[]}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Medium - Syncing</h4>
                    <NothingCalendar
                      size="md"
                      date={new Date(2024, 3, 26)}
                      time="09:45"
                      weather={{
                        temperature: 19,
                        condition: "rainy",
                      }}
                      syncStatus="syncing"
                      events={[]}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Large - Offline</h4>
                    <NothingCalendar
                      size="lg"
                      date={new Date(2024, 3, 27)}
                      time="16:00"
                      weather={{
                        temperature: 25,
                        condition: "sunny",
                      }}
                      syncStatus="offline"
                      events={[]}
                    />
                  </div>
                </div>
              </div>

              {/* Event Overflow Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Event Overflow Handling
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                      Small - 2 events max
                    </h4>
                    <NothingCalendar
                      size="sm"
                      date={new Date(2024, 3, 23)}
                      time="10:30"
                      weather={{
                        temperature: 21,
                        condition: "sunny",
                      }}
                      events={[
                        {
                          id: "1",
                          title: "Team standup meeting",
                          date: 23,
                          color: "blue",
                        },
                        {
                          id: "2",
                          title: "Design review session",
                          date: 23,
                          color: "green",
                        },
                        {
                          id: "3",
                          title: "Client presentation",
                          date: 23,
                          color: "red",
                        },
                        {
                          id: "4",
                          title: "Team retrospective",
                          date: 23,
                          color: "purple",
                        },
                      ]}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                      Medium - 3 events max
                    </h4>
                    <NothingCalendar
                      size="md"
                      date={new Date(2024, 3, 23)}
                      time="10:30"
                      weather={{
                        temperature: 21,
                        condition: "sunny",
                      }}
                      events={[
                        {
                          id: "1",
                          title: "Team standup meeting",
                          date: 23,
                          color: "blue",
                        },
                        {
                          id: "2",
                          title: "Design review session",
                          date: 23,
                          color: "green",
                        },
                        {
                          id: "3",
                          title: "Client presentation",
                          date: 23,
                          color: "red",
                        },
                        {
                          id: "4",
                          title: "Team retrospective",
                          date: 23,
                          color: "purple",
                        },
                        {
                          id: "5",
                          title: "Code review",
                          date: 23,
                          color: "orange",
                        },
                      ]}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                      Large - 3 events max
                    </h4>
                    <NothingCalendar
                      size="lg"
                      date={new Date(2024, 3, 23)}
                      time="10:30"
                      weather={{
                        temperature: 21,
                        condition: "sunny",
                      }}
                      events={[
                        {
                          id: "1",
                          title: "Team standup meeting",
                          date: 23,
                          color: "blue",
                        },
                        {
                          id: "2",
                          title: "Design review session",
                          date: 23,
                          color: "green",
                        },
                        {
                          id: "3",
                          title: "Client presentation",
                          date: 23,
                          color: "red",
                        },
                        {
                          id: "4",
                          title: "Team retrospective",
                          date: 23,
                          color: "purple",
                        },
                        {
                          id: "5",
                          title: "Code review",
                          date: 23,
                          color: "orange",
                        },
                        {
                          id: "6",
                          title: "Planning session",
                          date: 23,
                          color: "yellow",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          code={`import { NothingCalendar } from "@/components/ui/nothing-calendar";

export default function SystemStatusExample() {
  return (
    <div className="space-y-8">
      {/* Works with all sizes */}
      
      {/* No Events - Available in all sizes */}
      <NothingCalendar
        size="md"
        date={new Date(2024, 3, 24)}
        time="10:30"
        weather={{
          temperature: 18,
          condition: "cloudy"
        }}
        events={[]}
      />

      {/* Sync Error - Available in all sizes */}
      <NothingCalendar
        size="lg"
        date={new Date(2024, 3, 25)}
        time="14:15"
        weather={{
          temperature: 22,
          condition: "sunny"
        }}
        syncStatus="error"
        events={[]}
      />

      {/* Syncing - Available in all sizes */}
      <NothingCalendar
        size="sm"
        date={new Date(2024, 3, 26)}
        time="09:45"
        weather={{
          temperature: 19,
          condition: "rainy"
        }}
        syncStatus="syncing"
        events={[]}
      />

      {/* Event Overflow - Smart handling per size */}
      <NothingCalendar
        size="sm"
        date={new Date(2024, 3, 23)}
        time="10:30"
        weather={{
          temperature: 21,
          condition: "sunny"
        }}
        events={[
          {
            id: "1",
            title: "Team standup meeting",
            date: 23,
            color: "blue"
          },
          {
            id: "2",
            title: "Design review session",
            date: 23,
            color: "green"
          },
          {
            id: "3",
            title: "Client presentation",
            date: 23,
            color: "red"
          },
          {
            id: "4",
            title: "Team retrospective",
            date: 23,
            color: "purple"
          }
        ]}
      />
    </div>
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
  size?: "sm" | "md" | "lg" | "wide";
  syncStatus?: "synced" | "syncing" | "error" | "offline";
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
      lg: "w-96 h-96",
      wide: "w-[40rem] h-64"
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
    </div>
  );
}
