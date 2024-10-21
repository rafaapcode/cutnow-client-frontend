import BarberDescription from "@/components/barberPage/BarberDescription";
import BarberPhoto from "@/components/barberPage/BarberPhoto";
import BarberPortfolio from "@/components/barberPage/BarberPortfolio";
import DataProvider from "@/components/DataProvider";
import { LoadingPage } from "@/components/LoadingPage";
import { BarbershopService } from "@/services/BarbershopService";
import { useParams } from "react-router-dom";

const BarberPage = () => {
  const { id } = useParams();
  return (
    <div className="p-5 lg:pt-5 grid grid-cols-4 gap-2 gap-y-10 lg:gap-y-3">
      {id ? (
        <DataProvider
          getData={BarbershopService.GetBarber(id)}
          queryKey={["barber", id]}
          timeInCache={86400}
          render={(props: any) => {
            return (
              <>
                {props.error && (
                  <h2 className="text-center text-2xl">
                    Ocorreu um erro ao buscar o barbeiro
                  </h2>
                )}
                {props.isLoading ? (
                  <LoadingPage />
                ) : (
                  <>
                    <BarberPhoto
                      foto={props.data.data.informacoes.foto}
                      nome={props.data.data.nome}
                    />
                    <BarberDescription
                      description={props.data.data.informacoes.descricao}
                    />
                    <BarberPortfolio
                      data={props.data.data.informacoes.portfolio}
                    />
                  </>
                )}
              </>
            );
          }}
        />
      ) : (
        <h2 className="text-center text-2xl">Barbeiro não existe</h2>
      )}
    </div>
  );
};

export default BarberPage;
