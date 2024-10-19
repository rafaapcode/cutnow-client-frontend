const StructureImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="w-60 md:w-72 md:h-40 overflow-hidden rounded-md">
      <img
        src={imageUrl}
        alt="Structure image"
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default StructureImage;
