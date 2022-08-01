import { type } from "os";

export interface UserInterface {
  userName: string;
  password: string;
}

export interface IRequestBody {
  favoriteCity: string;
  email: string;
}
export interface IRequestQuery {
  email: string;
}
export interface IResponseBody {
  result: string;
}

