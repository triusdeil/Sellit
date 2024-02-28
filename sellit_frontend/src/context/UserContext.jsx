import { useState, useContext, createContext } from "react";

const UserContext = createContext();

export default function UserContextProvider({children}) {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);