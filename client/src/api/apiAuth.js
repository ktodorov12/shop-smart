import requester from "../api/requester";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login({ email, password }) {
  const user = requester.post(endpoints.login, { email, password });
  return user;
}

export async function register({ fullName, email, username, password }) {
  const user = requester.post(endpoints.register, { fullName, email, username, password });
  return user;
}

export async function logOut() {
  await requester.get(endpoints.logout);
}
