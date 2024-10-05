import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthUser } from "../api/authenticate";
import { LoadingPage } from "../components/LoadingPage";

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
  }, []);
  
  return (
    <LoadingPage />
  );
};

export default GoogleCallbackPage;
