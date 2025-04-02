import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useNavigate } from "react-router"
import { ReactNode, useEffect } from "react"

type Props = { children: ReactNode }


// this guard will be notified once user is logged out and tried to acceess protected route
const ProtectedRoutes = ({ children }: Props) => {
    const navigate = useNavigate()

    const token = useSelector((state: RootState) => state.auth.token)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    return (
        <>{children}</>
    )
}

export default ProtectedRoutes