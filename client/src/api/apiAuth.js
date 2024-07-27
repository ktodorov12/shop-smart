import requester from "../api/requester";

const endpoints = {
  login: "/login",
  register: "/users",
  logout: "/logout",
};

export async function login({ username, password }) {
  if (!username || !password) {
    //TODO change error handling when there is no data;
    return null;
  }

  const user = requester.post(endpoints.login, { username, password });
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
  await requester.post(endpoints.logout, {});
}
