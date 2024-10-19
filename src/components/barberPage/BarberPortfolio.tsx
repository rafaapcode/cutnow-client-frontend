import Slider from "../Slider";

const PortFolioCard = ({imageUrl}: {imageUrl: string}) => {
  return (
    <div className="w-64 h-80 rounded-md overflow-hidden">
      <img src={imageUrl} alt="haircut photo" className="object-cover w-full h-full rounded-md"/>
    </div>
  );
}

const BarberPortfolio = ({data}: {data: any[]}) => {
  return (
    <div className="col-span-4 rounded-md w-full h-[470px] lg:h-[415px] bg-neutral-900 pt-5 px-5">
      <h2 className="mb-6 text-2xl font-semibold">Portfolio</h2>
      <Slider data={data} resourceName="imageUrl" Component={PortFolioCard} className="w-[80%] md:w-[85%] lg:w-[95%] h-fit mx-auto"/>
    </div>
  )
}

export default BarberPortfolio;