import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  // const [value, setValue] = useState("Hello, World!");
  const [input, setInput] = useState("");

  return (
    <MyContext.Provider value={{ input, setInput }}>
      {children}
    </MyContext.Provider>
  );
};

export const newContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider };
