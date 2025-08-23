import requester from "./requester";

import type { InitialValuesLogin, User } from "../types/auth";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

interface Login {
  email: string;
  password: string;
}

export async function login(data: Login): Promise<User> {
  const { email, password } = data;
  const user = requester.post<InitialValuesLogin, User>(endpoints.login, {
    email,
    password,
  });
  return user;
}

interface RegisterData {
  fullName: string;
  email: string;
  username: string;
  password: string;
}

export async function register(data: RegisterData): Promise<User> {
  const { fullName, email, username, password } = data;
  const user = requester.post<RegisterData, User>(endpoints.register, {
    fullName,
    email,
    username,
    password,
  });
  return user;
}

export async function logOut() {
  await requester.get(endpoints.logout);
}
