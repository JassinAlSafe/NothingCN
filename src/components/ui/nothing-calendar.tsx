"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlarmClock } from "lucide-react";
import { AnimatedSun } from "./icons/animated-sun";
import { AnimatedCloud } from "./icons/animated-cloud";
import { AnimatedRain } from "./icons/animated-rain";

export interface NothingCalendarProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
  (
    {
      className,
      date = new Date(),
      weather,
      events = [],
      time,
      showAlarm = false,
      variant = "light",
      size = "md",
      syncStatus = "synced",
      ...props
    },
    ref
  ) => {
    const dayName = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    const dayNumber = date.getDate();
    const monthName = date.toLocaleDateString("en-US", { month: "long" });

    const sizeClasses = {
      sm: "w-64 h-72",
      md: "w-80 h-88",
      lg: "w-96 h-96",
      wide: "w-[40rem] h-64",
    };

    const getWeatherIcon = (condition: string) => {
      switch (condition) {
        case "sunny":
          return (
            <AnimatedSun
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
        case "cloudy":
          return (
            <AnimatedCloud
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
        case "rainy":
          return (
            <AnimatedRain
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
        case "snowy":
          return (
            <AnimatedCloud
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
        case "stormy":
          return (
            <AnimatedRain
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
        default:
          return (
            <AnimatedSun
              width={24}
              height={24}
              animate={true}
              className="text-red-500"
            />
          );
      }
    };

    const todayEvents = events.filter((event) => event.date === dayNumber);

    const getSyncStatusMessage = () => {
      switch (syncStatus) {
        case "syncing":
          return "Syncing events...";
        case "error":
          return "Sync failed - check connection";
        case "offline":
          return "Offline mode";
        default:
          return null;
      }
    };

    const getEventsDisplay = () => {
      const syncMessage = getSyncStatusMessage();
      const isWideLayout = size === "wide";

      if (syncMessage) {
        return (
          <div className="flex items-center space-x-2 text-yellow-500">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-sm font-medium">{syncMessage}</span>
          </div>
        );
      }

      if (todayEvents.length === 0) {
        return (
          <div className="flex items-center justify-center">
            <span
              className={cn(
                "font-ndot text-muted-foreground/60 tracking-wide",
                isWideLayout ? "text-sm" : "text-xs"
              )}
            >
              NO UPCOMING EVENTS
            </span>
          </div>
        );
      }

      // Determine max events and text width based on size
      const maxEvents = isWideLayout ? 4 : size === "sm" ? 2 : 3;
      const maxTextWidth = isWideLayout
        ? "max-w-[180px]"
        : size === "sm"
        ? "max-w-[120px]"
        : "max-w-[140px]";

      return (
        <div className="space-y-2">
          {todayEvents.slice(0, maxEvents).map((event) => (
            <div key={event.id} className="flex items-center space-x-2">
              <div
                className={cn(
                  "w-2 h-2 rounded-full flex-shrink-0",
                  event.color === "red" && "bg-red-500",
                  event.color === "green" && "bg-green-500",
                  event.color === "blue" && "bg-blue-500",
                  event.color === "purple" && "bg-purple-500",
                  event.color === "orange" && "bg-orange-500",
                  event.color === "yellow" && "bg-yellow-500",
                  !event.color && "bg-red-500"
                )}
              />
              <span
                className={cn("text-sm font-medium truncate", maxTextWidth)}
              >
                {event.title}
              </span>
            </div>
          ))}
          {todayEvents.length > maxEvents && (
            <div className="text-xs text-muted-foreground">
              +{todayEvents.length - maxEvents} more events
            </div>
          )}
        </div>
      );
    };

    // Wide layout with 4 zones
    if (size === "wide") {
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
          {/* Zone 1: Top Left - Day Name */}
          <div className="absolute top-4 left-6">
            <div className="text-4xl font-ndot font-bold tracking-wider">
              {dayName}
            </div>
          </div>

          {/* Zone 2: Top Right - Weather */}
          <div className="absolute top-4 right-6 text-right">
            {weather && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-ndot">
                    {weather.temperature}°
                  </span>
                  <span className="text-sm font-medium capitalize">
                    {weather.condition}
                  </span>
                </div>
                {getWeatherIcon(weather.condition)}
              </div>
            )}
          </div>

          {/* Zone 3: Bottom Left - Date & Time */}
          <div className="absolute bottom-6 left-6">
            <div className="text-lg font-medium mb-2">
              {dayNumber} {monthName}
            </div>
            {time && (
              <div className="flex items-center space-x-2">
                {showAlarm && <AlarmClock className="w-4 h-4 text-red-500" />}
                <span className="text-sm font-ndot text-red-500">{time}</span>
              </div>
            )}
          </div>

          {/* Zone 4: Bottom Right - Events */}
          <div className="absolute bottom-6 right-6 max-w-[280px]">
            {getEventsDisplay()}
          </div>

          {/* Corner dots */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-current opacity-20 rounded-full" />
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-current opacity-20 rounded-full" />
        </div>
      );
    }

    // Default layout for sm, md, lg
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
              {showAlarm && <AlarmClock className="w-4 h-4 text-red-500" />}
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
          <div className="mb-2">
            <div className="text-6xl font-ndot font-bold tracking-wider">
              {dayName}
            </div>
          </div>

          <div className="text-lg font-medium mb-8">
            {dayNumber} {monthName}
          </div>

          {/* Events */}
          <div className="absolute bottom-6 left-6 right-6">
            {getEventsDisplay()}
          </div>
        </div>

        {/* Corner dots */}
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
