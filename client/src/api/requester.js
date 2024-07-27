import { getUserToken } from "../utils/userData";

const BASE_URL = "http://localhost:3030";
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
    headers: {},
  };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
    //TODO add back4app needed headers
  }

  const token = getUserToken();
  if (token) {
    options.headers["X-Authorization"] = token;
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
