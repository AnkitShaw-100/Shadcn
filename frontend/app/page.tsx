import General from "@/components/Cards/General";
import Calendar from "@/components/Cards/Calendar";
import Line from "@/components/Cards/Line";
import Table from "@/components/Cards/Table";

export default function Home() {
  return (
    <>
      <div className="grid gap-8 overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          <General />
          <div className="grid gap-8">
            <Calendar />
            <Calendar />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Line />
          <Table />
        </div>
      </div>
    </>
  );
}
