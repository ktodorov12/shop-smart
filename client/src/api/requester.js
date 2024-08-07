import { getUserToken, removeSessionData } from "../utils/userData";

const BASE_URL = "https://shop-smart-no9m-7xx7f52zk-kaloyans-projects-c62708f7.vercel.app/";
/**
 * Basic requester
 * @param {string} url - the url for the fetch
 * @param {string} method - the method for the API call
 * @param {object} data - data to be sent to the BE
 */
async function requester(url, method, data, isAllowed) {
  const finalUrl = BASE_URL + url;
  const options = {
    method,
    headers: {},
  };

  if (isAllowed) {
    options.headers["X-Admin"] = "X-Admin";
  }
  
  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
  }

  const token = getUserToken();
  if (token && method !== "GET") {
    options.headers["X-Authorization"] = token;
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
  } catch (error) {
    throw error.message;
  }
}

export default {
  get: (url) => requester(url, "GET"),
  post: (url, data) => requester(url, "POST", data),
  put: (url, data, isAllowed) => requester(url, "PUT", data, isAllowed),
  del: (url) => requester(url, "DELETE"),
};
