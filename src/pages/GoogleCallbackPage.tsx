import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingPage } from "../components/LoadingPage";
import useAuth from "../hooks/useAuth";
import { AuthService } from "../services/AuthService";

const GoogleCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(searchParams);
  const code = queryParams.get("code");
  const { login } = useAuth();

  async function LoginUser(code: string) {
    const { status, token } = await AuthService.logInUser(code);
    if(status) {
      login(token);
      navigate("/");
    } else {
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
