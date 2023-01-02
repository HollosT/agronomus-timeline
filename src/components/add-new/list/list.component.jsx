import { useState } from "react";
import Button from "../../UI/button/button.component"
import FormInput from "../../UI/form-input/form-input.component"

import './list.styles.scss'

let name;
let count = 0;
let defaultLists = [];





const List = ({state, onInputHandler}) => {
    const [activeInput, setActiveInput] = useState('')
    const [lists, setLists] = useState(defaultLists)
    name= state

    const addListItem = () => {
       const newItem = count;
       setLists(prevList => {
            return [...prevList, newItem]
       })
       count++;
       
    }

    const removeList = (event) => {
        setLists(prevList => {
            return prevList.filter(list => list !== +event.target.id)
        })
    }
    
    const changeHandler = (event) => {
        setActiveInput(prev => {
            return prev = event.target.value
        })
    }

    const addItem = () => {
        onInputHandler(activeInput, name)
    }


    return (
        <div>
            <FormInput type="text" name={name} onChange={changeHandler}/>
            <Button  type="button" onClick={addItem}> Add</Button>

            {lists.length > 0 ? lists.map(list => (
                <div key={list} className="state-container">
                    <FormInput type="text" name={name} onChange={changeHandler}/>
                    <Button  type="button" onClick={removeList} id={list}> &times;</Button>
                    <Button  type="button" onClick={addItem} id={list}> Add</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem}>+</Button>
        </div>
    )
}

export default List