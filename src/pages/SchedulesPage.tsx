import List from "@/components/List";
import ScheduleCard from "@/components/schedules/ScheduleCard";

const schedule = [
  {
    barberImg: "/usuario-image.jpg",
    barberName: "string",
    barbershopName: "string",
    data: "string",
  },
  {
    barberImg: "/usuario-image.jpg",
    barberName: "string",
    barbershopName: "string",
    data: "string",
  },
  {
    barberImg: "/usuario-image.jpg",
    barberName: "string",
    barbershopName: "string",
    data: "string",
  },
  {
    barberImg: "/usuario-image.jpg",
    barberName: "string",
    barbershopName: "string",
    data: "string",
  },
  {
    barberImg: "/usuario-image.jpg",
    barberName: "string",
    barbershopName: "string",
    data: "string",
  }
];

const SchedulesPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-white text-center py-5">
        <p className="text-3xl">Meus Agendamentos</p>
      </div>
      <div className="flex flex-col items-center h-[700px] gap-3 py-2 overflow-auto scroll-smooth">
        <List data={schedule} resourceName="schedule" ItemComponent={ScheduleCard}/>
      </div>
    </div>
  );
};

export default SchedulesPage;
