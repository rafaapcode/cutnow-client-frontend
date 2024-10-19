import BarbershopsCard from "@/components/homePage/BarbershopsCard";
import List from "@/components/List";
import useQueryParams from "@/hooks/useQueryParams";

const SearchPage = () => {
  const { value } = useQueryParams("barbershop");
  
  const barbershop = [
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
  
  const filtered = barbershop.filter((barbershop) => barbershop.barbershopName === value);

  return (
    <div className="text-white">
      <div className="px-5 lg:px-0 py-5">
        <h2 className="text-xl md:text-3xl font-semibold">
          Resultados para : {value}
        </h2>
      </div>
      <div className="h-[800px] lg:h-[700px] px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 overflow-auto scroll-smooth">

        {
          filtered.length === 0 ? <p className="font-semibold md:text-lg">Nenhuma barbearia encontrada</p> : <List data={filtered} resourceName="barbershop" ItemComponent={BarbershopsCard}/>
        }
      </div>
    </div>
  );
};

export default SearchPage;
