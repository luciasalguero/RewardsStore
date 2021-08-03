//Dependencies
import React, { useState, useEffect } from "react";
//Assets
import { callUser } from "../services/apiUser";

//Creating context
export const UserContext = React.createContext();

//Creating Provider
export function UserProvider({ children }) {
  //Defining initial states with useState
  const [userPoints, setUserPoints] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  const [userName, setUserName] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  //First time application renders, it gets user data
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  /* --------------------------------- */
  //Getting user data
  const getUser = async () => {
    //initial state: loading and without errors
    setUserPoints({ ...userPoints, loading: true, error: null });

    try {
      //data: async call, it returns promise
      const user = await callUser();
      //stop loading and presenting data
      setUserPoints({ ...userPoints, loading: false, data: user.points });
      setUserName({ ...userName, loading: false, data: user.name });
    } catch (error) {
      //stop loading and presenting error
      setUserPoints({ ...userPoints, loading: false, error });
      setUserName({ ...userName, loading: false, error });
    }
  };
  /* --------------------------------- */

  return (
    <UserContext.Provider value={{ userPoints, setUserPoints, userName }}>
      {children}
    </UserContext.Provider>
  );
}