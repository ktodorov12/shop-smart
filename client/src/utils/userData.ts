import type { User } from "../types/auth";

export function setSessionData(name: string, data: unknown) {
  sessionStorage.setItem(name, JSON.stringify(data));
}

export function getSessionData<TData>(name: string): TData | undefined {
  const item = sessionStorage.getItem(name);
  if (item === null) return undefined;
  const data: TData = JSON.parse(item);
  return data;
}

export function removeSessionData(name: string) {
  sessionStorage.removeItem(name);
}

export function getUserToken(): string | undefined {
  const userData: User | undefined = getSessionData("user");
  return userData?.accessToken;
}
