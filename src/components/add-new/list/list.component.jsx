import { Fragment, useContext, useEffect, useState } from "react";
import Button from "../../UI/button/button.component"
import {ListContext} from '../../../context/list/list.component'

import './list.styles.scss'
import { ModalContext } from "../../../context/modal/modal.component";


let count = 1;
let defaultLists = [];


const List = ({state, edit, contentType}) => {
    const [isEdit, setIsEdit] = useState(false)
    // const modalCtx = useContext(ModalContext).modalContent;
    const listCtx = useContext(ListContext)
    const [lists, setLists] = useState(defaultLists)
    const name= state


    const { contents} =listCtx
    useEffect(() => {
        setIsEdit(edit)
        if(isEdit && contentType) {
            
            const curr = contents.find(content => {
                for (const key in content) {
                    if(key === name) return true
                }
            })

            const presetListArea = async () => {
               await preSetList(curr)
               await preSetValues(curr)

            }

            presetListArea().catch(console.error)
           
        }
    }, [contents])

    
    const preSetList = async (curr) => {
        let arr = [];

        curr[state].forEach((_, index) => {
            if(index === 0) return
            const newItem = count;
            arr.push(newItem);
            count++
        })

        setLists(arr)
    }

    const preSetValues = async (curr) => {
        const listItems =  document.querySelectorAll(`.${name}-list-textarea`);
        console.log(listItems.length)
        if(curr[name].length > 0) {
           Array.from(listItems).forEach((item, index) => {
                if (index < curr[name].length) {
                    item.value = curr[name][index].content;
                }
            })
        }
    }
    
    // useEffect(() => {
    //    const listItems =  document.querySelectorAll('.list-textarea');
    //    listItems.forEach(item => item.value = '')
    // }, [modalCtx])

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
            <textarea name={name} id={0} onChange={listCtx.addListItem} className={`list-textarea state-container ${name}-list-textarea`} rows="2" cols="70" ></textarea>


            {lists.length > 0 ? lists.map(list => (
                <div key={list} className="state-container">
                    <textarea  name={name} id={list} onChange={listCtx.addListItem} className={`list-textarea ${name}-list-textarea`} rows="2" cols="70"></textarea>
                    <Button  type="button" onClick={removeList} id={list} buttonType="delete"> &times;</Button>
                </div>
            )) : ''}
            <Button type="button" onClick={addListItem} buttonType="add">+</Button>
        </div>
    )
}

export default List