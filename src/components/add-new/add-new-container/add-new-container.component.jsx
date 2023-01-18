import { useState } from "react";
import FormInput from "../../UI/form-input/form-input.component";
import Button from '../../UI/button/button.component'
import Lists from "../list/list.component";

import './add-new.styles.scss'

const defaultFormFields = {
    versionNumber: "",
    title: "",
    date: "",
    description: ""
};

const contents = {
    new: [],
    update: [],
    error: []
}

const AddNewContainer = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [content, setContent] = useState(contents);

    const {versionNumber, title, date, description} = formFields;

    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
    } 

    const inputListHandler = (input, name) => {
        setContent(prev => {
            const prevArr = prev[name].push(input)
           
            return {...prev, name: prevArr}
        })

        console.log(content)
    }

  

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({...formFields, ...content})

        
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <FormInput label="Version number" type="number" name="versionNumber" value={versionNumber} onChange={changeHandler}/>
                <FormInput label="Title" type="text" name="title" value={title} onChange={changeHandler}/>
                <FormInput label="Date" type="date" name="date" value={date} onChange={changeHandler}/>
                <FormInput label="Description" type="richtext" name="description" value={description} onChange={changeHandler}/>
            </div>

            <div className="main-state-container">
                <div className="new-container">
                    <h5>What is new?</h5>
                    <Lists state="news" onInputHandler={inputListHandler} />
                </div>
                <div className="new-container">
                    <h5>What was updated?</h5>
                    <Lists state="updates" onInputHandler={inputListHandler} />
                </div>
                <div className="new-container">
                    <h5>What is fixed?</h5>
                    <Lists state="errors" onInputHandler={inputListHandler} />
                </div>

            </div>
            <Button type="submit">Add</Button>
        </form>  
    )
}

export default AddNewContainer;