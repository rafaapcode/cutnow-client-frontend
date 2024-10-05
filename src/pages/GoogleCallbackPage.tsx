import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthUser } from "../api/authenticate";
import { LoadingPage } from "../components/LoadingPage";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(searchParams);
  const code = queryParams.get("code");

  async function LoginUser(code: string) {
    try {
      const res = await AuthUser(code);
      console.log(res);
      if (!res.error) {
        navigate("/");
      } else {
        navigate("/sign-in");
      }
    } catch (error: any) {
      console.log("GoogleCallbackPage (Error): ", error);
      navigate("/sign-in");
    }
  }

  useEffect(() => {
    if (code) {
      LoginUser(code);
    } else {
      navigate("/sign-in");
    }
  }, []);

  return <LoadingPage />;
};

export default GoogleCallbackPage;
