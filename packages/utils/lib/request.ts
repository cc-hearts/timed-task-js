import axios from "axios";
import { logger } from "@cc-heart/utils";

function formatMethod(method) {
  switch (String(method).toUpperCase()) {
    case "0":
    case "GET":
      return "GET";
    case "1":
    case "POST":
      return "POST";
    case "2":
    case "PUT":
      return "PUT";
    case "3":
    case "DELETE":
      return "DELETE";
    default:
      return "";
  }
}
function request(
  url: string,
  method: number | string,
  params = {},
  headers = {}
) {
  method = formatMethod(method);
  return axios({
    url,
    method: method || "GET",
    [method === "POST" ? "data" : "params"]: params,
    headers: {
      ...headers,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
      "Content-Type": "application/json",
    },
  });
}

export default { request };
