import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [steps, setSteps] = useState(0);
  const [details, setDetails] = useState();
  const setValues = (values) => {
    setDetails(prevData => ({
      ...prevData,
      ...values
    }))
  }
  return (
    <AppContext.Provider
      value={{
        steps,
        setSteps,
        setValues,
        details
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
