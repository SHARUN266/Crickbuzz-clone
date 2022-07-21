import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../useContext"

export const PrivateRoute=({children})=>{
    const {isAuth} = useContext(UserContext)
     console.log(isAuth)
    if(isAuth){
     return   <Navigate to='/SignIn' />
    }else if(!isAuth){
        return children;
    }

   
}