export interface IUserToken {
  token: string;
}

export interface IUserInfo {
  email: string;
  login: string;
  password: string;
}

export type UserLoginInfo = Omit<IUserInfo, "login">;

export type UserAuthInfo = Omit<IUserInfo, "password">;
