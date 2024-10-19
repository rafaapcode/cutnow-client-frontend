export const BarbershopImage = () => {
  const statusStyle = {
    Fechado: "bg-red-700",
    Aberto: "bg-[#D3FB3F]",
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center">
      <div className="size-28 relative rounded-md">
        <img
          src="/usuario-image.jpg"
          alt="barbershop logo"
          className="object-cover w-full h-full rounded-md"
        />
        <div
          className={`absolute bottom-0 right-0 size-6 ${statusStyle["Fechado"]} rounded-full`}
        />
      </div>
      <div>
        <h2 className="text-lg md:text-3xl font-semibold">Nome da Barbearia</h2>
        <p className="text-sm md:text-base font-semibold mt-3 text-neutral-500">Endereço barbearia</p>
      </div>
    </div>
  );
};

const BarbershopInfo = () => {
  return (
    <>
      <div className="hidden relative md:block md:w-[90%] lg:w-[80%] mx-auto mt-6 h-52">
        <div className="w-full h-full absolute z-10 bg-black/70" />
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src="/barbershop-banner.jpg"
            alt="banner of barbershop"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="z-20 absolute -bottom-14 left-2">
          <BarbershopImage />
        </div>
      </div>
      <div className="md:hidden mt-5">
        <BarbershopImage />
      </div>
    </>
  );
};

export default BarbershopInfo;
