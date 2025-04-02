import  axiosInstance  from "../../../client/client"

export const authenticateUser = async (username: string, password: string) => {
    try {
        const response = await axiosInstance.post("/login", {
            username,
            password,
        });

        return response.data; 
    } catch (error) {
        console.error("Authentication failed:", error);
        throw error; 
    }
};