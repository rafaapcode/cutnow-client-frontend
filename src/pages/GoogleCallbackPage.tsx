import Lottie from "lottie-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthUser } from "../api/authenticate";
import LoadingBarber from "../assets/animations/barber-loading.json";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(searchParams);
  const code = queryParams.get("code");

  useEffect(() => {
    if (code) {
      AuthUser(code)
        .then((res) => {
          console.log(res);
          if(!res.error) {
            navigate("/home");
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log("GoogleCallbackPage (Error): ", err);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [code]);
  
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={LoadingBarber} className="size-32 md:size-40" />
    </div>
  );
};

export default GoogleCallbackPage;
