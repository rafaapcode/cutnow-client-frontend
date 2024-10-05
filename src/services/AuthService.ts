import { AuthUser } from "../api/authenticate";

export class AuthService {
  static async logInUser(code: string) {
    try {
      const res = await AuthUser(code);
      if (!res.error) {
        return {
          status: true,
          token: res.data.token,
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
