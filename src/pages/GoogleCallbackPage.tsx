import Lottie from "lottie-react";
import { useSearchParams } from "react-router-dom";
import LoadingBarber from "../assets/animations/barber-loading.json";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const code = queryParams.get('code');
  console.log(code);

  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={LoadingBarber} className="size-32 md:size-40"/>
    </div>
  )
}

export default GoogleCallbackPage;