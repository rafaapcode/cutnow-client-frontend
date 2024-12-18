import { BarbershopService } from "@/services/BarbershopService";
import { useQueryClient } from "@tanstack/react-query";
import { add, format } from "date-fns";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import DataProvider from "../DataProvider";
import List from "../List";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";

type IBarberCalendarProps = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleService: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  barbeariaId: string;
  isPending: boolean
};

function ListServices({ service }: { service: {nomeService: string; preco: number;} }) {
  return <option value={service.nomeService.toLowerCase()}>{service.nomeService}</option>;
}

function ListServiceSkeleton() {
  return <div className="w-1/2 p-5 rounded-md bg-neutral-700 animate-pulse" />;
}

const BarberCalendar = ({
  handleChange,
  handleClick,
  handleService,
  barbeariaId,
  isPending
}: IBarberCalendarProps, ref: any) => {
  const queryClient = useQueryClient();
  const closeModal = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: ["services", barbeariaId],
      queryFn:BarbershopService.GetServices(barbeariaId)
    })
  };

  useImperativeHandle(ref, () => {
    return {
      closeModal: () => closeModal.current?.click()
    }
  })

  return (
    <Dialog>
      <DialogTrigger onMouseEnter={handleMouseEnter} className="bg-[#D3FB3F] hover:bg-[#9cbb2c] p-1 rounded-md transition-all duration-100">
        <CiCalendar className="size-5 text-black" />
      </DialogTrigger>
      <DialogContent ref={ref} className="bg-neutral-900 border-neutral-800 w-[95%] md:w-full">
        <DialogHeader>
          <DialogTitle>Solicite um agendamento</DialogTitle>
          <DialogDescription>
            Será enviado um email para você quando o barbeiro confirmar ou
            recusar o agendamento.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <input
            type="datetime-local"
            min={`${format(
              add(new Date().toISOString(), { days: 1 }),
              "yyyy-MM-dd"
            )}T00:00`}
            max={`${format(
              add(new Date().toISOString(), { months: 2 }),
              "yyyy-MM-dd"
            )}T00:00`}
            onChange={handleChange}
            className="w-1/2 p-2 bg-neutral-700 rounded-md outline-none border-none"
          />
          <DataProvider
            getData={BarbershopService.GetServices(barbeariaId)}
            queryKey={["services", barbeariaId]}
            timeInCache={86400}
            render={(props: any) => {
              console.log(props.data);
              return (
                <>
                  {props.error && (
                    <h2 className="text-2xl text-center">
                      Ocorreu um erro tente novamente
                    </h2>
                  )}
                  {props.isLoading ? (
                    <ListServiceSkeleton />
                  ) : (
                    <select
                      onChange={handleService}
                      name="services"
                      id="service"
                      className="w-1/2 bg-neutral-700 p-2 border-none outline-none rounded-md"
                    >
                      <option defaultChecked value="-">-</option>
                      <List
                        data={props.data.data}
                        resourceName="service"
                        ItemComponent={ListServices}
                        errorMessage="Nenhum serviço encontrado"
                      />
                    </select>
                  )}
                </>
              );
            }}
          />
        </div>
        <DialogFooter>
          <Button disabled={isPending} variant={"secondary"} onClick={handleClick}>
            {
              isPending ? <AiOutlineLoading3Quarters className="size-6 animate-spin"/> : "Solicitar Agendamento"
            }
          </Button>
        </DialogFooter>
        <DialogClose ref={closeModal} className="hidden" />
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(BarberCalendar);
