import { useState } from "react";
import FormInput from "../UI/form-input/form-input.component";
import Button from '../UI/button/button.component'
import Lists from "./list/list.component";

import './add-new.styles.scss'

const defaultFormFields = {
    versionNumber: "",
    title: "",
    date: "",
    description: "",
    contents: [
        {
            type: 'new',
            list: []
        },
        {
            type: 'update',
            list: []
        },
        {
            type: 'error',
            list: []
        }
    ]
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

    const inputListHandler = (value, name) => {
        const currentStateArr = formFields.contents.filter(state => state.type === name)
        const [state] = currentStateArr
        
        setFormFields(prevState => {
            return {...prevState, contents}
        })
    }

    const handleSubmit = (event) => {
        
        

        
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <FormInput label="Version number" type="number" name="versionNumber" value={versionNumber} onChange={changeHandler}/>
            <FormInput label="Title" type="text" name="title" value={title} onChange={changeHandler}/>
            <FormInput label="Date" type="date" name="date" value={date} onChange={changeHandler}/>
            <FormInput label="Description" type="richtext" name="description" value={description} onChange={changeHandler}/>

            <div className="main-state-container">
                <div className="new-container">
                    <h5>What is new?</h5>
                    <Lists state="new" onInputHandler={inputListHandler} />
                </div>
                <div className="new-container">
                    <h5>What was updated?</h5>
                    <Lists state="update" onInputHandler={inputListHandler} />
                </div>
                <div className="new-container">
                    <h5>What is fixed?</h5>
                    <Lists state="error" onInputHandler={inputListHandler} />
                </div>

            </div>
            <Button type="submit">Add</Button>
        </form>  
    )
}

export default AddNew;