
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
    clearFields: () => {},
    setEditableFields: () => {}
  });
  
export const FormProvider = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const setEditableFields = (version) => {
      setFormFields({
        versionNumber: version.versionNumber,
        title: version.title,
        date: version.date,
        description: version.description
      })
    }


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
            clearFields,
            setEditableFields
        }}
      >
        {props.children}
      </FormContext.Provider>
    );
  };
  