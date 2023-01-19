
import { useState, createContext } from "react";


const defaultFormFields = {
    versionNumber: "",
    title: "",
    date: "",
    description: ""
};


export const FormContext = createContext({
    versionNumber: "",
    title: "",
    date: "",
    description: "",
    changeHandler: () => {},
  });
  
export const FormProvider = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);


    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
    } 

    return (
      <FormContext.Provider
        value={{
            formFields,
            changeHandler
        }}
      >
        {props.children}
      </FormContext.Provider>
    );
  };
  