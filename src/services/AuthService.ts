import { AuthUser } from "../api/authenticate";

type AuthServiceResponse = {
  status: boolean;
  token?: string;
  data?: {
    avatar: string;
    email: string;
    id: string;
    nome: string;
  }
}

export class AuthService {
  static async logInUser(code: string): Promise<AuthServiceResponse> {
    try {
      const res = await AuthUser(code);
      if (!res.error) {
        return {
          status: true,
          token: res.data.token,
          data: res.data.user
        };
      } else {
        return {
          status: false,
        };
      }
    } catch  {
      return {
        status: false,
      };
    }
  }
}
