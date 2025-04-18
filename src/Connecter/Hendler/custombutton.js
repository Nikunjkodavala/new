import { BUTTON_API_ENDPOINT } from "../groupapi.js";
import { Powerconnecter } from '../apiconnecter'

// export const basicbutton = async (data) => {
//     try {
//         const response = await powerconnecter(
//             "POST",
//             "/api/button/simple",
//             data,
//         )
// } catch (error) {
//         console.error("Error in basicbutton:", error);
//         throw error; // Rethrow the error to be handled by the caller
//     }
//     return response.data;
// }

export const getbasicbtn = async () => {
    try {
        console.log("testing  a a",BUTTON_API_ENDPOINT.GET_SIMPLE_BUTTON_API_URL);
        const response = await Powerconnecter("GET",BUTTON_API_ENDPOINT.GET_SIMPLE_BUTTON_API_URL,null);

        if(!response.data.success){ 
           throw new Error(response.data.message);
        }
        console.log("btn apitest", response.data);
        return response.data;
    }
    catch (error) {
        console.log("Error in getbasicbtn:", error);
       
    }
}