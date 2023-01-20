import { useContext, useState } from "react";
import Button from "../../UI/button/button.component"
import FormInput from "../../UI/form-input/form-input.component"
import {ListContext} from '../../../context/list/list.component'

import './list.styles.scss'

let name;
let count = 0;
let defaultLists = [];





const List = ({state, onInputHandler}) => {
    const listCtx = useContext(ListContext)

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
    
    return (
        <div className="list-container">
            <textarea name={name} id={0} onChange={listCtx.addListItem} className="list-textarea" rows="2" cols="70"></textarea>

            {lists.length > 0 ? lists.map((list, i) => (
                <div key={i+1} className="state-container">
                    <textarea name={name} id={i+1} onChange={listCtx.addListItem} className="list-textarea" rows="2" cols="70"></textarea>
                    <Button  type="button" onClick={removeList} id={list} buttonType="delete"> &times;</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem} buttonType="add">+</Button>
        </div>
    )
}

export default List