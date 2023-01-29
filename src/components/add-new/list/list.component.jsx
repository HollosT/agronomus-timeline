import { useContext, useEffect, useState } from "react";
import Button from "../../UI/button/button.component"
import {ListContext} from '../../../context/list/list.component'

import './list.styles.scss'
import { ModalContext } from "../../../context/modal/modal.component";

let name;
let count = 1;
let defaultLists = [];


const List = ({state}) => {
    const modalCtx = useContext(ModalContext).modalContent;
    const listCtx = useContext(ListContext)

   

    const [lists, setLists] = useState(defaultLists)
    name= state

    useEffect(() => {

       const listItems =  document.querySelectorAll('.list-textarea');
       listItems.forEach(item => item.value = '')
    }, [modalCtx])

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
            <textarea name={name} id={0} onChange={listCtx.addListItem} className="list-textarea state-container" rows="2" cols="70"></textarea>

            {lists.length > 0 ? lists.map(list => (
                <div key={list} className="state-container">
                    <textarea  name={name} id={list} onChange={listCtx.addListItem} className="list-textarea" rows="2" cols="70"></textarea>
                    <Button  type="button" onClick={removeList} id={list} buttonType="delete"> &times;</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem} buttonType="add">+</Button>
        </div>
    )
}

export default List