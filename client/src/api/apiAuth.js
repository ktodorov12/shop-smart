import requester from "../api/requester";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login({ email, password }) {
  if (!email || !password) {
    //TODO change error handling when there is no data;
    return null;
  }

  const user = requester.post(endpoints.login, { email, password });
  return user;
}

export async function register({ fullName, email, username, password, rePass }) {
  if (!fullName || !email || !username || !password) {
    //TODO change error handling when there is no data;
    return null;
  }

  if (password !== rePass) {
    //TODO change error handling when passwords dont match;
    return null;
  }

  const user = requester.post(endpoints.register, { fullName, email, username, password });
  return user;
}

export async function logOut() {
  await requester.get(endpoints.logout);
}
