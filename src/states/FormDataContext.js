import React, { createContext, useContext, useState } from "react";
import initialFormState from "../constants/formField.json";
// Create context
const FormDataContext = createContext();

// Provider component
export const FormDataProvider = ({ children }) => {
  const loadFormDataFromlocalStorage = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return initialFormState;
  };

  const [formData, setFormData] = useState(loadFormDataFromlocalStorage());

  const updateFormData = (path, value) => {
    const keys = path.split(".");
    setFormData((prevState) => {
      let newState = { ...prevState };
      let temp = newState;
      for (let i = 0; i < keys.length - 1; i++) {
        temp = temp[keys[i]];
      }
      temp[keys[keys.length - 1]] = value;
      localStorage.setItem("formData", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to use context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
