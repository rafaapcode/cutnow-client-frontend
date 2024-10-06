import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const {user} = useAuth();

  console.log("User Homepage", user);

  return (
    <div className="text-white h-screen flex justify-center items-center text-3xl">
      HomePage
    </div>
  );
};

export default HomePage;
