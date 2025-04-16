import axios from "axios";

export const instant = axios.create({});

exports.powerconnecter = (method, url, bodydata, header, params) =>{
    return instant({
        method: `${method}`,
        url: `${url}`,
        data: bodydata ? bodydata : null,
        headers: header ? header : null,
        params: params ? params : null,
        },
    );
}

