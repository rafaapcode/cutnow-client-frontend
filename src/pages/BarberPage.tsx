import BarberDescription from "@/components/barberPage/BarberDescription";
import BarberPhoto from "@/components/barberPage/BarberPhoto";
import BarberPortfolio from "@/components/barberPage/BarberPortfolio";
import { useParams } from "react-router-dom";

const BarberPage = () => {
  const { id } = useParams();
  console.log(id);

  const portfolioBarber = [
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg",
    "/barberiros-foto.jpg"
  ]

  return (
    <div className="p-5 lg:pt-5 grid grid-cols-4 gap-2 gap-y-10 lg:gap-y-3">
      <BarberPhoto />
      <BarberDescription />
      <BarberPortfolio data={portfolioBarber}/>
    </div>
  );
};

export default BarberPage;
