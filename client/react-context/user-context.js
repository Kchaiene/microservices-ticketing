import React, {createContext} from "react";


export const UserContext = createContext();



export default function UserProvider({currentUser=null, children}){
  const [state, setState] = React.useState(currentUser);

  return (
    <UserContext.Provider value={{
      setState,
      currentUser: state,
    }}>
      {children}
    </UserContext.Provider>
  )
}


