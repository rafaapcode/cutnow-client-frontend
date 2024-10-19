import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type IBarbersCardProps = {
  barber: {
    barberPhoto: string;
    barberName: string;
    id: string;
  }
}

const BarbersCards = ({ barber }: IBarbersCardProps) => {
  console.log(barber);
  return (
    <div className="group w-[240px] md:w-[280px] lg:w-[294px] h-[373px] relative overflow-hidden mt-5 rounded-md">
      <div className="w-full h-full bg-black/70 group-hover:bg-black/80 absolute"/>
      <img src="/barberiros-foto.jpg" alt="barber foto" className="w-full h-full object-cover rounded-md"/>
      <div className="hidden group-hover:flex justify-between items-center p-3 absolute bg-neutral-800 w-[90%] bottom-2 rounded-lg left-3 transition-all duration-100">
        <p className="font-semibold">Nome barbeiro</p>
        <Link to={`/barber/${123}`} className="p-2 bg-[#acd31f] rounded-md">
          <RiLoginCircleLine className="size-5 text-black"/>
        </Link>
      </div>
    </div>
  )
}

export default BarbersCards;