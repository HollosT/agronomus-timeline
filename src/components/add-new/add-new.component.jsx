import { useState } from "react";
import FormInput from "../UI/form-input/form-input.component"

const defaultFormFields = {
    versionNumber: 0,
    title: ""
};


const AddNew = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {versionNumber, title} = formFields

    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
        console.log(formFields)
    } 

    return (
        <form className="form-container">
            <FormInput label="Version number" type="number" name="versionNumber" value={versionNumber} onChange={changeHandler}/>
            <FormInput label="Title" type="text" name="title" value={title} onChange={changeHandler}/>
        </form>  
    )
}

export default AddNew;