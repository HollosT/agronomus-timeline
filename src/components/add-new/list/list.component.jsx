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
        <div>
            <textarea name={name} id={0} onChange={listCtx.addListItem} ></textarea>

            {lists.length > 0 ? lists.map((list, i) => (
                <div key={i+1} className="state-container">
                    <textarea name={name} id={i+1} onChange={listCtx.addListItem} ></textarea>
                    <Button  type="button" onClick={removeList} id={list}> &times;</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem}>+</Button>
        </div>
    )
}

export default List