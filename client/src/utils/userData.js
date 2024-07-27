export function setSessionData(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getSessionData(name) {
  const data = JSON.parse(localStorage.getItem(name));
  return data || undefined;
}

export function removeSessionData(name) {
  localStorage.removeItem(name);
}

export function getUserToken() {
  const userData = getSessionData("userData");
  return userData?.accessToken;
}
