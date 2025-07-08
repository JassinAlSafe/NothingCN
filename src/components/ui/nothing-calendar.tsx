"use client";

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
          {/* Time with Alarm */}
          {time && (
            <div className="flex items-center space-x-2">
              {showAlarm && (
                <AlarmClock className="w-4 h-4 text-red-500" />
              )}
              <span className="text-sm font-ndot text-red-500">{time}</span>
            </div>
          )}
          
          {/* Weather */}
          {weather && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-ndot">{weather.temperature}°</span>
              {getWeatherIcon(weather.condition)}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Day Name in Dot Matrix */}
          <div className="mb-2">
            {variant === "dark" ? (
              <div className="text-6xl font-bold tracking-wider text-white">
                {/* Custom dot matrix for dark theme */}
                <div className="inline-block text-center">
                  {dayName.split('').map((letter, index) => (
                    <div key={index} className="inline-block mr-2">
                      {letter === 'M' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'O' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'N' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'T' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'U' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'E' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'W' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'F' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                      {letter === 'S' && (
                        <div className="grid grid-cols-5 gap-1 w-12 h-16">
                          {[0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0].map((dot, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${dot ? 'bg-white' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-6xl font-ndot font-bold tracking-wider">
                {dayName}
              </div>
            )}
          </div>
          
          {/* Date */}
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

        {/* Subtle corner dots for Nothing OS aesthetic */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
      </div>
    );
  }
);

NothingCalendar.displayName = "NothingCalendar";

export { NothingCalendar };