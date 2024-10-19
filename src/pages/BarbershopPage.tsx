import BarbershopInfo from "@/components/barbershopPage/BarbershopInfo";
import { useParams } from "react-router-dom";

const BarbershopPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-full">
      <BarbershopInfo />
    </div>
  );
};

export default BarbershopPage;
