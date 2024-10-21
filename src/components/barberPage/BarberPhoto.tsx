import { useCallback, useState } from "react";
import BarberCalendar from "./BarberCalendar";

type BarberPhotoProps = {
  foto: string;
  nome: string;
}

const BarberPhoto = ({ foto, nome }: BarberPhotoProps) => {
  const [date, setDate] = useState("");

  const handleClick = () => {
    console.log(date);
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
  }, []);

  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 w-full md:w-[90%] lg:w-[80%] h-[350px] rounded-md bg-neutral-900 p-5">
      <div className="h-[85%] bg-neutral-600 rounded-md overflow-hidden">
        <img src={foto} alt="baber photo" className="object-cover w-full h-full"/>
      </div>
      <div className="flex justify-between h-[15%] items-center">
        <h2 className="text-xl font-semibold">{nome}</h2>
        <BarberCalendar handleChange={handleChange}  handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default BarberPhoto