export function setSessionData(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data));
}

export function getSessionData(name) {
  const data = JSON.parse(sessionStorage.getItem(name));
  return data || "";
}

export function removeSessionData(name) {
  sessionStorage.removeItem(name);
}

export function getUserToken() {
  const userData = getSessionData("user");
  return userData?.accessToken;
}
