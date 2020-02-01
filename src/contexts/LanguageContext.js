import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();



const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('spanish');

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;
