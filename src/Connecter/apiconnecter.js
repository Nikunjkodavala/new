import axios from "axios";

export const instant = axios.create({});

export const Powerconnecter = (method, url, bodydata, header, params) => {
  return instant({
    method: `${method}`,
    url: `${url}`,
    data: bodydata ?? null,
    headers: header ?? null,
    params: params ?? null,
  });
};
