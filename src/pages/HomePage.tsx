import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const {user} = useAuth();

  // useEffect(() => {
  //   ScheduleService.getSchedules(user.email)
  //     .then(res => console.log(res))
  //     .catch(err  => console.log(err))
  // }, []);
  console.log(user);
  return (
    <div className="text-white flex justify-center items-center text-3xl">
      HomePage
    </div>
  );
};

export default HomePage;
