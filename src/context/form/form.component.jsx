
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
    clearFields: () => {}
  });
  
export const FormProvider = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);


    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
    } 

    const clearFields = () => {
      setFormFields(defaultFormFields)
    }

    return (
      <FormContext.Provider
        value={{
            formFields,
            changeHandler,
            clearFields
        }}
      >
        {props.children}
      </FormContext.Provider>
    );
  };
  