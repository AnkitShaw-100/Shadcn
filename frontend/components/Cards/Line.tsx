"use client";
import { ResponsiveLine } from "@nivo/line";
import {Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card";

const lineData = [
  {
    id: "Japan",
    color: "hsl(210, 70%, 50%)",
    data: [
      { x: "Jan", y: 65 },
      { x: "Feb", y: 72 },
      { x: "Mar", y: 88 },
      { x: "Apr", y: 95 },
      { x: "May", y: 110 },
      { x: "Jun", y: 125 },
      { x: "Jul", y: 140 },
      { x: "Aug", y: 135 },
      { x: "Sep", y: 120 },
      { x: "Oct", y: 105 },
      { x: "Nov", y: 90 },
      { x: "Dec", y: 80 },
    ],
  },
  {
    id: "France",
    color: "hsl(340, 70%, 50%)",
    data: [
      { x: "Jan", y: 45 },
      { x: "Feb", y: 52 },
      { x: "Mar", y: 68 },
      { x: "Apr", y: 85 },
      { x: "May", y: 100 },
      { x: "Jun", y: 115 },
      { x: "Jul", y: 130 },
      { x: "Aug", y: 128 },
      { x: "Sep", y: 110 },
      { x: "Oct", y: 95 },
      { x: "Nov", y: 75 },
      { x: "Dec", y: 60 },
    ],
  },
  {
    id: "USA",
    color: "hsl(120, 70%, 50%)",
    data: [
      { x: "Jan", y: 85 },
      { x: "Feb", y: 90 },
      { x: "Mar", y: 105 },
      { x: "Apr", y: 115 },
      { x: "May", y: 130 },
      { x: "Jun", y: 145 },
      { x: "Jul", y: 160 },
      { x: "Aug", y: 155 },
      { x: "Sep", y: 140 },
      { x: "Oct", y: 125 },
      { x: "Nov", y: 105 },
      { x: "Dec", y: 95 },
    ],
  },
];

export default function Line() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
        <CardDescription>Revenue trends by region</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-[180px] w-full">
          <ResponsiveLine
            data={lineData}
            margin={{ top: 10, right: 70, bottom: 35, left: 40 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendOffset: 32,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendOffset: -35,
              legendPosition: "middle",
              tickValues: 5,
            }}
            colors={{ datum: "color" }}
            lineWidth={3}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            enableArea={false}
            enableGridX={false}
            enableGridY={true}
            gridYValues={5}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 60,
                translateY: 0,
                itemsSpacing: 2,
                itemDirection: "left-to-right",
                itemWidth: 50,
                itemHeight: 18,
                itemOpacity: 0.85,
                symbolSize: 10,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
