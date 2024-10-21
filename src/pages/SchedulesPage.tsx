import DataProvider from "@/components/DataProvider";
import List from "@/components/List";
import { LoadingPage } from "@/components/LoadingPage";
import ScheduleCard from "@/components/schedules/ScheduleCard";
import useAuth from "@/hooks/useAuth";
import { UserService } from "@/services/UserService";

const SchedulesPage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-3">
      <div className="text-white text-center py-5">
        <p className="text-3xl">Meus Agendamentos</p>
      </div>
      <div className="flex flex-col items-center h-[700px] gap-3 py-2 overflow-auto scroll-smooth">
        <DataProvider getData={UserService.getSchedules(user.email)} queryKey={["schedules", {user: user.email}]} render={(props: any) => {
          return (
            <>
              {props.error && <h2>Ocorreu um erro ao buscar seus agendamentos !</h2>}
              {
                props.isLoading ? <LoadingPage /> : <List data={props.data.data} resourceName="schedule" ItemComponent={ScheduleCard} errorMessage="Nenhum agendamento encontrado !"/>
              }
            </>
          )
        }}/>
      </div>
    </div>
  );
};

export default SchedulesPage;
