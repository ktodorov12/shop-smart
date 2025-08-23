import { getUserToken, removeSessionData } from "../utils/userData";

const BASE_URL = "http://localhost:3030";

async function requester<TRequest, TResponse>(
  url: string,
  method: string,
  data?: TRequest,
  isAllowed?: boolean
): Promise<TResponse> {
  const finalUrl = BASE_URL + url;
  const headers = new Headers();
  const options: RequestInit = {
    method,
    headers,
  };

  if (isAllowed) {
    headers.set("X-Admin", "X-Admin");
  }

  if (data) {
    options.body = JSON.stringify(data);
    headers.set("Content-Type", "application/json");
  }

  const token = getUserToken();
  if (token && method !== "GET") {
    headers.set("X-Authorization", token);
  }

  try {
    const response = await fetch(finalUrl, options);

    if (!response.ok) {
      const error = await response.json();

      // TODO fix when there is no user to rerender
      if (error.code == 403) {
        removeSessionData("user");
      }
      throw new Error(`${error.message}`);
    }

    //TODO add logic for expired session and other HTTP code statuses

    return response.json();
  } catch (error: unknown) {
    throw error;
  }
}

export default {
  get: <TResponse>(url: string) => requester<never, TResponse>(url, "GET"),
  post: <TRequest, TResponse>(url: string, data: TRequest) =>
    requester<TRequest, TResponse>(url, "POST", data),
  put: <TRequest, TResponse>(url: string, data: TRequest, isAllowed?: boolean) =>
    requester<TRequest, TResponse>(url, "PUT", data, isAllowed),
  del: <TResponse>(url: string) => requester<never, TResponse>(url, "DELETE"),
};
