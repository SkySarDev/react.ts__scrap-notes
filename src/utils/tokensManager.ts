import { IUserToken } from "types/usersTypes";

export const saveToken = (tokenData: IUserToken | unknown): void => {
  // @ts-ignore
  localStorage.setItem("token", tokenData.token);
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};
