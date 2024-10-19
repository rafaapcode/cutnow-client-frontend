import { useParams } from "react-router-dom";

const BarbershopPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-full">
      <div className="hidden md:block md:w-[90%] lg:w-[80%] bg-red-300 mx-auto mt-6 h-52 rounded-lg">
        <h1>teste</h1>
      </div>
    </div>
  );
};

export default BarbershopPage;
