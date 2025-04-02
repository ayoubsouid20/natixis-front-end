// this hook is used to make the authenciation easier by splitting 
// login buissness logic into a hook

import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "../services/authentication.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authenticationSlice";

export const useAuthUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: ({ username, password }: { username: string; password: string }) =>
            authenticateUser(username, password),
        onSuccess: (data) => {
            const token = data.jwtToken
            dispatch(setToken(token))
            toast.success("Login success",{
                autoClose:5000
            })
            navigate('/products' ,{replace: true})
            localStorage.setItem("TOKEN",token); 
        },
        onError: (error) => {
            toast.error("Login failed")
        },
    });

    return mutation;

}