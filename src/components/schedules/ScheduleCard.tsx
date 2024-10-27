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
    barbeiro: {
      nome: string;
      informacoes?: {
        foto: string;
      }
    },
    barbearia: {
      nomeDaBarbearia: string;
    },
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
  const { barbearia, barbeiro, data } = schedule;
  const dataSplit = data.split("T");
  return (
    <div className="w-[90%] md:w-1/2 lg:w-1/4 bg-[#D9D9D9] flex flex-col justify-between rounded-md h-32 p-4 text-black">
      <h2 className="text-xl font-semibold">{barbearia.nomeDaBarbearia}</h2>
      <div className="flex justify-between items-end">
        <div className="flex gap-3 items-center w-1/2">
          <CiCalendar className="size-4 md:size-6 text-black" />
          <p className="text-sm">{dataSplit[0]} as {dataSplit[1]}H</p>
        </div>
        <BarberImg barberName={barbeiro.nome}>
          <UserPhoto className="size-10 shadow-md" avatar={barbeiro.informacoes?.foto || "./default-photo.jpg"} />
        </BarberImg>
      </div>
    </div>
  );
};

export default ScheduleCard;
