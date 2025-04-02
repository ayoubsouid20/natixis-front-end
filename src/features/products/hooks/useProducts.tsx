import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products.service";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../store/productSlice";

export const useProducts = () => {
    const dispatch = useDispatch()

    const  {data, isPending} = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    useEffect(()=>{
        if(data){
            dispatch(setProducts(data))
        }
    },[data])

    return {isPending, data}
}