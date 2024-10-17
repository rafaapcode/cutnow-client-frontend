import BarbershopsCard from "@/components/homePage/BarbershopsCard";
import List from "@/components/List";
import { RxUpdate } from "react-icons/rx";

const HomePage = () => {
  const barbershgop = [
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Aberto",
    },
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Fechado",
    },
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Aberto",
    },
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Fechado",
    },
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Aberto",
    },
    {
      barbershopName: "teste",
      id: "2131",
      imageUrl: "adadad",
      status: "Fechado",
    }
  ];
  return (
    <div>
      <div className="flex justify-between items-center pt-10 mb-5">
        <h2 className="text-2xl lg:text-3xl">Barbearias mais Próximas</h2>
        <button>
          <RxUpdate className="size-6" />
        </button>
      </div>
      <div className=" h-[700px] px-5 py-5 grid grid-cols-3 gap-y-5 overflow-auto">
        <List data={barbershgop} resourceName="barbershop" ItemComponent={BarbershopsCard}/>
      </div>
    </div>
  );
};

export default HomePage;
