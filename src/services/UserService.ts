import { getSchedules } from "@/api/user";

export class UserService {
  static getSchedules(email: string) {
    return async () => {
      if (!email) {
        return {
          error: true,
          message: "Email é obrigatório",
        };
      }

      return await getSchedules(email);
    };
  }
}
