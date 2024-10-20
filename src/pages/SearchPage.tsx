import DataProvider from "@/components/DataProvider";
import BarbershopsCard from "@/components/homePage/BarbershopsCard";
import BarbershopsCardSkeleton from "@/components/homePage/BarbershopsCardSkeleton";
import List from "@/components/List";
import useQueryParams from "@/hooks/useQueryParams";
import { BarbershopService } from "@/services/BarbershopService";
import { useEffect } from "react";

const SearchPage = () => {
  const { value } = useQueryParams("barbershopName");

  useEffect(() => {}, [value]);

  return (
    <div className="text-white">
      <div className="px-5 lg:px-0 py-5">
        <h2 className="text-xl md:text-3xl font-semibold">
          Resultados para : {value}
        </h2>
      </div>
      <div className="h-[800px] lg:h-[700px] px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 overflow-auto scroll-smooth">
        <DataProvider
          getData={BarbershopService.GetBarbershopByName(value || "")}
          queryKey={["barbershop", { filterBy: "name",name: value || "" }]}
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
                  <List data={props.data.data} resourceName="barbershop" ItemComponent={BarbershopsCard} errorMessage="Nenhuma barbearia encontrada"/>
                )}
              </>
            )
          }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
