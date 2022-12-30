import { useState } from "react";
import Button from "../../UI/button/button.component"
import FormInput from "../../UI/form-input/form-input.component"

import './list.styles.scss'

let name;
let count = 0;
let defaultLists = [];



const List = ({state, onInputHandler}) => {
    const [lists, setLists] = useState(defaultLists)
    name = state

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
        onInputHandler(event.target.value, event.target.name)
    }

    return (
        <div>
            <FormInput type="text" name={name} onChange={changeHandler}/>
            {lists.length > 0 ? lists.map(list => (
                <div key={list} className="state-container">
                    <FormInput type="text" name={name} onChange={changeHandler}/>
                    <Button  type="button" onClick={removeList} id={list}> &times;</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem}>+</Button>
        </div>
    )
}

export default List