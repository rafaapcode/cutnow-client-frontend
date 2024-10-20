import DataProvider from "@/components/DataProvider";
import BarbershopsCard from "@/components/homePage/BarbershopsCard";
import BarbershopsCardSkeleton from "@/components/homePage/BarbershopsCardSkeleton";
import List from "@/components/List";
import { BarbershopService } from "@/services/BarbershopService";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 lg:px-0 pt-10 mb-5">
        <h2 className="text-2xl md:text-3xl">Barbearias mais Próximas</h2>
      </div>
      <div className="h-[800px] lg:h-[700px] px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 overflow-auto scroll-smooth">
        <DataProvider
          getData={BarbershopService.GetAllBarbershop}
          queryKey={["barbershops"]}
          timeInCache={86400}
          render={(props: any) => {
            return (
              <>
                {props.error && (
                  <h1 className="text-center text-2xl">
                    Tente novamente mais tarde !
                  </h1>
                )}
                {props.isLoading ? (
                  <BarbershopsCardSkeleton />
                ) : (
                  <List
                    data={props.data.data}
                    resourceName="barbershop"
                    ItemComponent={BarbershopsCard}
                  />
                )}
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
