const BarberDescription = ({description}: {description: string}) => {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-3 p-5 w-full h-[350px] rounded-md bg-neutral-900 overflow-hidden">
      <h2 className="mb-3 text-xl lg:text-2xl font-semibold">Sobre Mim</h2>
      <p className="text-neutral-500 text-sm lg:text-base">
       {description}
      </p>
    </div>
  );
};

export default BarberDescription;
