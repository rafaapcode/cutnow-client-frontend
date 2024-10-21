import BarbersCards from "@/components/barbershopPage/BarbersCards";
import BarbershopInfo from "@/components/barbershopPage/BarbershopInfo";
import ServiceTable from "@/components/barbershopPage/ServiceTable";
import StructureImage from "@/components/barbershopPage/StructureImage";
import DataProvider from "@/components/DataProvider";
import { LoadingPage } from "@/components/LoadingPage";
import Slider from "@/components/Slider";
import { BarbershopService } from "@/services/BarbershopService";
import { useParams } from "react-router-dom";

const BarbershopPage = () => {
  const { id } = useParams();
  if (!id) {
    return (
      <>
        <h1>Barbearia não encontrada</h1>
      </>
    );
  }

  return (
    <div className="w-full">
      <DataProvider
        getData={BarbershopService.GetBarbershop(id)}
        timeInCache={84600}
        queryKey={["barbershop", { id }]}
        render={({data, error, isLoading}: any) => {
          return (
            <>
              {error && (
                <h2 className="text-2xl">
                  Ocorreu um erro , tente novamente mais tarde !
                </h2>
              )}
              {isLoading ? (
                <LoadingPage />
              ) : (
                <>
                  <BarbershopInfo 
                    bairro={data.data.informacoes.bairro}
                    cidade={data.data.informacoes.cidade}
                    estado={data.data.informacoes.estado}
                    fotoBanner={data.data.informacoes.fotoBanner}
                    numero={data.data.informacoes.numero}
                    rua={data.data.informacoes.rua}
                    status={data.data.informacoes.status}
                    logo={data.data.informacoes.logo}
                    nomeDaBarbearia={data.data.nomeDaBarbearia}
                    horarioAbertura={data.data.informacoes.horarioAbertura}
                    horarioFechamento={data.data.informacoes.horarioFechamento}
                  />
                  <div className="w-full mt-10 md:mt-28">
                    <h2 className="my-5 text-xl md:text-2xl font-semibold mx-10 lg:mx-36">
                      Conheça nossa estrutura
                    </h2>
                    <Slider
                      data={data.data.informacoes.fotosEstruturaBarbearia}
                      resourceName="imageUrl"
                      Component={StructureImage}
                    />
                  </div>
                  <ServiceTable services={data.data.servicos} />
                  <div className="w-full pb-16 md:mt-3">
                    <h2 className="text-xl md:text-2xl font-semibold mx-10 lg:mx-36">
                      Conheça nossos especialistas
                    </h2>
                    <Slider
                      data={data.data.barbeiro}
                      resourceName="barber"
                      Component={BarbersCards}
                    />
                  </div>
                </>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default BarbershopPage;
