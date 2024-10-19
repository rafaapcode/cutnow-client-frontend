import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Slider = ({
  data,
  Component,
  resourceName,
}: {
  data: any[];
  Component: any;
  resourceName: string;
}) => {
  return (
    <Carousel className="w-[70%] md:w-[80%] lg:w-full h-fit p-2 mx-auto">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <Component {...{ [resourceName]: item }} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="bg-neutral-800 border-neutral-700 text-neutral-300" />
      <CarouselPrevious className="bg-neutral-800 border-neutral-700 text-neutral-300" />
    </Carousel>
  );
};

export default Slider;
