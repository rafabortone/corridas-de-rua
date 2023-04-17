import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const[trailsList, setTrailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const [grade, setGrade] = useState([]);
  const [subscription, setSubscription] = useState([]);


  return (
    <AppContext.Provider 
      value={{
        trailsList,
        setTrailsList,
        modalVisible,
        setModalVisible,
        trail,
        setTrail,
        grade,
        setGrade,
        subscription,
        setSubscription
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;