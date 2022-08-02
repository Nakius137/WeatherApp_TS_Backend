
export interface UserInterface {
  userName: string;
  password: string;
}

export interface IRequestBody {
  favoriteCity: string;
  verifiedUsername: string;
}
export interface IRequestQuery {
  verifiedUsername: string;
}
export interface IResponseBody {
  result: string;
}

export interface decodedToken {
  username: string
}