import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
  return (
    <div className="w-full h-full px-3 md:px-5 lg:px-1 flex flex-col items-center justify-evenly">
      <img src="/logo.png" alt="CutNow Logo" className="size-24 md:size-36 lg:hidden"/>
      <h1 className="text-2xl d:text-4xl lg:text-6xl">
        Bem vindo a sua <span className="text-[#AAD704]">barbearia</span> Online
        !
      </h1>
      <h2 className="text-xl md:text-3xl tracking-wide md:leading-loose">
        Faça login com a sua conta do Google e ache a barbearia mais perto de você
      </h2>
      <button className="bg-white/10 rounded-lg px-5 flex justify-between items-center gap-5 py-5 text-lg md:text-2xl hover:bg-white/20 transition-all duration-100">
        <FcGoogle className="size-7"/> Entrar com Google
      </button>
    </div>
  );
};

export default Authentication;
