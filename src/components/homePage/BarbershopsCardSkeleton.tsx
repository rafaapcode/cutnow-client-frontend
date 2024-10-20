const BarbershopsCardSkeleton = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] h-[350px] bg-neutral-900 rounded-md p-3 mx-auto flex flex-col gap-5">
      <div className="w-full h-[230px] overflow-hidden rounded-md animate-pulse bg-neutral-800" />
    </div>
  );
};

export default BarbershopsCardSkeleton;
