import { useState } from "react";
import { createContext } from "react";
 
export const UserContext = createContext(null);

export const UserContextProvider =({children}) =>{
    const [isAuth,setIsAuth] = useState(false);
     return <UserContext.Provider value={{isAuth,setIsAuth}}>
        {children}
    </UserContext.Provider>
}