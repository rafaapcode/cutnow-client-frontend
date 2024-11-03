import DataProvider from "@/components/DataProvider";
import BarbershopsCard from "@/components/homePage/BarbershopsCard";
import BarbershopsCardSkeleton from "@/components/homePage/BarbershopsCardSkeleton";
import List from "@/components/List";
import { BarbershopService } from "@/services/BarbershopService";
import { useState } from "react";

const HomePage = () => {
  const [userCoord, setUserCoord] = useState({ userLat: 0, userLong: 0 });
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoord({
          userLat: position.coords.latitude,
          userLong: position.coords.longitude,
        });
      },
      (err) => {
        console.log("Posição aqui", err.message);
      }
    );
  } else {
    return (
      <div className="p-5">
        <h2 className="text-lg md:text-xl">
          Seu navegador não suporta A API DE GOELOCALIZAÇÃO. Acesse o site de
          outro NAVEGADOR
        </h2>
      </div>
    );
  }

  console.log("Coords",userCoord);

  return (
    <div>
      <div className="flex justify-between items-center px-5 lg:px-0 pt-10 mb-5">
        <h2 className="text-2xl md:text-3xl">Barbearias mais Próximas</h2>
      </div>
      <div className="h-[800px] lg:h-[700px] px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 overflow-auto scroll-smooth">
        <DataProvider
          getData={BarbershopService.GetAllBarbershop(-22.887814, -47.26974)}
          queryKey={["barbershops"]}
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
                ) : !props.data.data ? (
                  <h2>Nenhuma barbearia encontrada !</h2>
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
