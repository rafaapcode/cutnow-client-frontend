import { add, format } from "date-fns";
import { CiCalendar } from "react-icons/ci";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type IBarberCalendarProps = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BarberCalendar = ({ handleChange, handleClick }: IBarberCalendarProps) => {

  return (
    <Dialog>
      <DialogTrigger className="bg-[#D3FB3F] hover:bg-[#9cbb2c] p-1 rounded-md transition-all duration-100">
        <CiCalendar className="size-5 text-black" />
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 border-neutral-800 w-[95%] md:w-full">
        <DialogHeader>
          <DialogTitle>Solicite um  agendamento</DialogTitle>
          <DialogDescription>
            Será enviado um email para você quando o barbeiro confirmar ou recusar o agendamento.
          </DialogDescription>
        </DialogHeader>
        <div>
          <input type="datetime-local" min={`${format(add(new Date().toISOString(), {days: 1}), "yyyy-MM-dd")}T00:00`} max={`${format(add(new Date().toISOString(), {months: 2}), "yyyy-MM-dd")}T00:00`} onChange={handleChange} className="p-2 bg-neutral-700 rounded-md outline-none border-none"/>
        </div>
        <DialogFooter>
          <Button variant={"secondary"} onClick={handleClick}>Solicitar agendamento</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BarberCalendar;
