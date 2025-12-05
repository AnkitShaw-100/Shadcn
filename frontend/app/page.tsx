import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import Line from "@/components/Cards/Line";
import Table from "@/components/Cards/Table";

export default function Home() {
  return (
    <div className="grid grid-rows-2 gap-1 h-full w-full overflow-hidden">
      {/* Top Row - General and Calendar */}
      <div className="grid grid-cols-2 gap-1 overflow-hidden min-h-0">
        {/* General Card */}
        <div className="overflow-hidden min-h-0">
          <General />
        </div>
        
        {/* Calendar Cards */}
        <div className="grid grid-rows-2  gap-1 overflow-hidden min-h-0">
          <div className="overflow-hidden min-h-0">
            <Calendar />
          </div>
          <div className="overflow-hidden min-h-0">
            <Calendar />
          </div>
        </div>
      </div>
      
      {/* Bottom Row - Line and Table */}
      <div className="grid grid-cols-2 gap-1 overflow-hidden min-h-0">
        <div className="overflow-hidden min-h-0">
          <Line />
        </div>
        <div className="overflow-hidden min-h-0">
          <Table />
        </div>
      </div>
    </div>
  );
}
