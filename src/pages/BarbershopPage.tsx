import BarbershopInfo from "@/components/barbershopPage/BarbershopInfo";
import Slider from "@/components/barbershopPage/Slider";
import StructureImage from "@/components/barbershopPage/StructureImage";
import { useParams } from "react-router-dom";

const BarbershopPage = () => {
  const { id } = useParams();
  console.log(id);

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
        <h2 className="my-5 text-xl md:text-2xl font-semibold mx-10 lg:mx-36">Conheça nossa estrutura</h2>
        <Slider
          data={structureImages}
          resourceName="imageUrl"
          Component={StructureImage}
        />
      </div>
    </div>
  );
};

export default BarbershopPage;
