import { Navigate, useLocation } from "react-router-dom"

const PrivateRouter = ({children}) => {
    const location = useLocation()
    console.log(location)

    return location?.state?.logged ? children : <Navigate to={'/'} />
}

export default PrivateRouter