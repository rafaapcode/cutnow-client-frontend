import useAuth from "@/hooks/useAuth";
import { useMutate } from "@/hooks/useMutate";
import { RequestService } from "@/services/RequestService";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import BarberCalendar from "./BarberCalendar";

type BarberPhotoProps = {
  foto: string;
  nome: string;
  barberId: string;
  barbeariaId: string;
};

const BarberPhoto = ({
  foto,
  nome,
  barberId,
  barbeariaId,
}: BarberPhotoProps) => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const { user } = useAuth();
  const closeRef = useRef<any>(null);

  const { isError, isPending, mutateAsync } = useMutate({
    getData: RequestService.createRequest({
      barbearia_id: barbeariaId,
      barbeiro_id: barberId,
      data: date,
      emailCliente: user.email,
      nomeCliente: user.nome,
      tipoServico: service,
    }),
  });

  const handleClick = async () => {
    if(service == "-" || !service) {
      toast.error("Selecione um serviço válido");
      return;
    }

    if(!date) {
      toast.error("Selecione uma data válida");
      return;
    }

    const { error, message } = await mutateAsync();
    if (isError) {
      setDate("");
      setService("");
      closeRef.current?.closeModal()
    } else {
      if (error) {
        setDate("");
        setService("");
        toast.error(message);
        closeRef.current?.closeModal()
      } else {
        setDate("");
        setService("");
        toast.success(message);
        closeRef.current?.closeModal()
      }
    }
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }, [date]);

  const handleService = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setService(e.target.value);
    },
    [service]
  );

  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 w-full md:w-[90%] lg:w-[80%] h-[350px] rounded-md bg-neutral-900 p-5">
      <div className="h-[85%] bg-neutral-600 rounded-md overflow-hidden">
        <img
          src={foto}
          alt="baber photo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between h-[15%] items-center">
        <h2 className="text-xl font-semibold">{nome}</h2>
        <BarberCalendar
          ref={closeRef}
          isPending={isPending}
          barbeariaId={barbeariaId}
          handleService={handleService}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default BarberPhoto;
