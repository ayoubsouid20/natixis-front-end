import axiosInstance from "../../../client/client";

export const fetchProducts = async () => {
    const response = await axiosInstance.get("/products/all");
    return response.data;
};