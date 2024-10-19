import BarbershopInfo from "@/components/barbershopPage/BarbershopInfo";
import ServiceTable from "@/components/barbershopPage/ServiceTable";
import Slider from "@/components/barbershopPage/Slider";
import StructureImage from "@/components/barbershopPage/StructureImage";
import { useParams } from "react-router-dom";

const BarbershopPage = () => {
  const { id } = useParams();
  console.log(id);

  const services = [
    { nomeService: "Barba", tempoMedio: 30, preco: 25 },
    { nomeService: "Cabelo", tempoMedio: 30, preco: 35 },
    { nomeService: "Barba + Cabelo", tempoMedio: 60, preco: 60 },
    { nomeService: "Sombrancelha", tempoMedio: 10, preco: 10 },
    { nomeService: "Barba + Cabelo + Sombrancelha", tempoMedio: 75, preco: 75 },
  ];

  const structureImages = [
    "/barbershop-banner.jpg",
    "/barbershop-banner.jpg",
    "/barbershop-banner.jpg",
    "/barbershop-banner.jpg",
    "/barbershop-banner.jpg",
    "/barbershop-banner.jpg",
  ];

  return (
    <div className="w-full">
      <BarbershopInfo />
      <div className="w-full mt-10 md:mt-28">
        <h2 className="my-5 text-xl md:text-2xl font-semibold mx-10 lg:mx-36">
          Conheça nossa estrutura
        </h2>
        <Slider
          data={structureImages}
          resourceName="imageUrl"
          Component={StructureImage}
        />
      </div>
      <ServiceTable services={services}/>
    </div>
  );
};

export default BarbershopPage;
