"use client";
import { ResponsiveCalendar } from "@nivo/calendar";
import {Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card";

// Generate daily data for 2024
const generateCalendarData = () => {
  const data = [];
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    // Generate random activity value (0-400) with some days having no activity
    const value = Math.random() > 0.2 ? Math.floor(Math.random() * 400) : 0;
    if (value > 0) {
      data.push({ value, day: dateStr });
    }
  }
  return data;
};

const calendarData = generateCalendarData();

export default function Calendar() {
  return (
    <div className="w-full rounded-xl border shadow-sm h-full flex flex-col">
      <div className="pb-1 pt-2 p-4">
        <CardTitle className="text-sm">Activity Calendar</CardTitle>
        <CardDescription className="text-xs">Daily activity overview for 2024</CardDescription>
      </div>
      {/* <CardContent className="pb-0 px-0 flex-1 overflow-hidden"> */}
        <div className="h-full w-full p-2">
          <ResponsiveCalendar
            data={calendarData}
            from="2024-01-01"
            to="2024-12-31"
            emptyColor="#eeeeee"
            colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
            margin={{ top: 5, right: 2, bottom: 2, left: 2 }}
            yearSpacing={24}
            monthSpacing={2}
            monthBorderWidth={1}
            monthBorderColor="#ffffff"
            daySpacing={1}
            dayBorderWidth={1}
            dayBorderColor="#ffffff"
            tooltip={(day) => (
              <div className="bg-white p-2 rounded shadow-lg border text-xs">
                <strong>{day.day}</strong>: {day.value || 0}
              </div>
            )}
          />
        </div>
      {/* </CardContent> */}
     </div>
  );
}
