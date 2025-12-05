import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";
import Calendar from "@/components/Cards/Calendar";
import Line from "@/components/Cards/Line"
import Table from "@/components/Cards/Table"

export default function Home() {
  return (
    <>
      <div className="grid gap-[32px] overflow-hidden">
        <div className="grid grid-cols-2  gap-[32px]">
          <General />
          <div className="grid gap-[32px]">
            <Calendar />
            <Calendar />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[32px]">
          <Line className="h-[300px]" />
          <Table className="w-full" / >
        </div>
      </div>
    </>
  );
}
