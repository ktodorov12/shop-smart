export interface InitialValuesLogin {
  email: string;
  password: string;
}

export interface InitialValuesRegister {
  fullName: string;
  email: string;
  username: string;
  password: string;
  rePass: string;
}

export interface User {
  accessToken: string;
  email: string;
  fullName: string;
  password: string;
  username: string;
  _createdOn: Date;
  _id: string;
  imageUrl?: string;
}
