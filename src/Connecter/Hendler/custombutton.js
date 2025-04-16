import { powerconnecter } from "../powerconnecter.js";

export const basicbutton = async (data) => {
    try {
        const response = await powerconnecter(
            "POST",
            "/api/button/simple",
            data,
        )
} catch (error) {
        console.error("Error in basicbutton:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
    return response.data;
}