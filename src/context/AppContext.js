import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [corridaList, setCorridaList] = useState([]);
  const [corrida, setCorrida] = useState([]);
  const [inscricao, setInscricao] = useState([]);
  const [user, setUser] = useState([]);


  return (
    <AppContext.Provider
      value={{
        corridaList,
        setCorridaList,
        corrida,
        setCorrida,
        inscricao,
        setInscricao,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;