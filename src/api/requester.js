import { getUserToken } from "../utils/userData";

const BASE_URL = "https://parseapi.back4app.com";
const appId = "v7YdnVkISJ3hnhP261ZbPJGtB5x0MF3fEteKqDcQ";
const apiKey = "Ycj8AZgp6us5vnXUHtqZIhwIJTX8Dhf3sAj76cgZ";
/**
 * Basic requester
 * @param {string} url - the url for the fetch
 * @param {string} method - the method for the API call
 * @param {object} data - data to be sent to the BE
 */
async function requester(url, method, data) {
  //TODO check whether you can add cookies here
  // Check MDN fetch for this
  const finalUrl = BASE_URL + url;
  const options = {
    method,
    headers: {
      "X-Parse-Application-Id": appId,
      "X-Parse-REST-API-Key": apiKey,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
    //TODO add back4app needed headers
  }

  const token = getUserToken();
  if (token) {
    options.headers["X-Parse-Session-Token"] = token;
  }

  try {
    const response = await fetch(finalUrl, options);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    //TODO add logic for expired session and other HTTP code statuses

    return response.json();
  } catch (error) {
    //TODO fix the error logic
    console.error(error.message);
  }
}

export default {
  get: (url) => requester(url, "GET"),
  post: (url, data) => requester(url, "POST", data),
  put: (url, data) => requester(url, "PUT", data),
  del: (url) => requester(url, "DELETE"),
};
