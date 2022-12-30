import { useState } from "react";
import FormInput from "../UI/form-input/form-input.component";
import Button from '../UI/button/button.component'

const defaultFormFields = {
    versionNumber: "",
    title: "",
    date: "",
    description: "",
};


const AddNew = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {versionNumber, title, date, description} = formFields

    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
    } 

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formFields)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <FormInput label="Version number" type="number" name="versionNumber" value={versionNumber} onChange={changeHandler}/>
            <FormInput label="Title" type="text" name="title" value={title} onChange={changeHandler}/>
            <FormInput label="Date" type="date" name="date" value={date} onChange={changeHandler}/>
            <FormInput label="Description" type="richtext" name="description" value={description} onChange={changeHandler}/>
            <Button type="submit" >Add</Button>
        </form>  
    )
}

export default AddNew;