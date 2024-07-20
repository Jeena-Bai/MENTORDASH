import React, { createContext, useContext, useState } from 'react';

const SubmissionsContext = createContext();

export const useSubmissions = () => {
  return useContext(SubmissionsContext);
};

export const SubmissionsProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);

  return (
    <SubmissionsContext.Provider value={{ submissions, setSubmissions }}>
      {children}
    </SubmissionsContext.Provider>
  );
};
