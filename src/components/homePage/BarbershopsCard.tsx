import { Link } from "react-router-dom";

type IBarbershopCard = {
  barbershop: {
    imageUrl: string;
    barbershopName: string;
    status: string;
    id: string;
  };
};

const BarbershopsCard = ({ barbershop }: IBarbershopCard) => {
  const { imageUrl, barbershopName, status, id } = barbershop;
  console.log(imageUrl, barbershopName, status, id);
  const statusStyle = status === "Aberto" ? "bg-green-600" : "bg-red-600";
  return (
    <div className="w-[60%] h-[350px] bg-neutral-900 rounded-md p-3 mx-auto flex flex-col gap-5">
      <div className="w-full h-[230px] overflow-hidden rounded-md">
        <img
          src="/usuario-image.jpg"
          alt="barbershop logo"
          className="object-cover h-full w-full"
        />
      </div>
      <h2 className="text-lg">Nome do Barbeiro</h2>
      <div className="flex justify-between items-center">
        <Link
          to={`/barbershops/${id}`}
          className="bg-neutral-700 px-3 py-1 rounded-md font-bold tracking-wide hover:bg-neutral-800 transition-all duration-100"
        >
          Detalhes
        </Link>
        <span className={`px-3 py-1 rounded-md ${statusStyle}`}>{status}</span>
      </div>
    </div>
  );
};

export default BarbershopsCard;
