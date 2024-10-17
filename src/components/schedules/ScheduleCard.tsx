import { CiCalendar } from "react-icons/ci";
import UserPhoto from "../Header/UserPhoto";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type IScheduleCard = {
  schedule: {
    barberImg: string;
    barberName: string;
    barbershopName: string;
    data: string;
  };
};

const BarberImg = ({
  children,
  barberName,
}: {
  children: React.ReactNode;
  barberName: string;
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{barberName}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ScheduleCard = ({ schedule }: IScheduleCard) => {
  const { barberImg, barberName, barbershopName, data } = schedule;
  console.log(barberImg, barberName, barbershopName, data);
  return (
    <div className="w-[90%] md:w-1/2 lg:w-1/4 bg-[#D9D9D9] flex flex-col justify-between rounded-md h-32 p-4 text-black">
      <h2 className="text-xl font-semibold">Barbearia do Zé</h2>
      <div className="flex justify-between items-end">
        <div className="flex gap-3 items-center">
          <CiCalendar className="size-4 md:size-6 text-black" />
          <p className="text-sm">09/10/2024 as 09:00h</p>
        </div>
        <BarberImg barberName={barberName}>
          <UserPhoto className="size-10 shadow-md" avatar={barberImg} />
        </BarberImg>
      </div>
    </div>
  );
};

export default ScheduleCard;
