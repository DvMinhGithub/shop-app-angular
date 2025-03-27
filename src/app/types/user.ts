export interface ILoginRequest {
  phoneNumber: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IRegisterRequest {
  phoneNumber: string;
  password: string;
  retypedPassword: string;
  fullName: string;
  dateOfBirth: string;
  address: string;
}

export interface IRegisterResponse {
  message: string;
}
