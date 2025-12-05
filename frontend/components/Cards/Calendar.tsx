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
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Activity Calendar</CardTitle>
        <CardDescription>Daily activity overview for 2024</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-[120px] w-full">
          <ResponsiveCalendar
            data={calendarData}
            from="2024-01-01"
            to="2024-12-31"
            emptyColor="#eeeeee"
            colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            yearSpacing={20}
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
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 8,
                itemCount: 4,
                itemWidth: 32,
                itemHeight: 16,
                itemsSpacing: 8,
                itemDirection: "right-to-left",
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
