export interface UserTokenDto {
  access_token: string;
  user: UserSessionDto;
}

export interface UserSessionDto {
  id: number;
  username: string;
  email: string;
}
