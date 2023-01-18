import React, { useState, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";



const addItemToList = (list, item) => {
    const {name, id, value} = item;

    
    const exisitingListItem = list.find(listItem => listItem.id === item.id);

    if(exisitingListItem) {
        return list.map((curItem) => 
            curItem.id === item.id
            ? {...curItem, content: item.value}
            :curItem
        )
    }
    return list.push({id: id, content: item.value})

}


const LIST_ACTION_TYPES = {
    SET_LIST_ITEMS: 'SET_LIST_ITEMS',
}

const INITIAL_STATE = {
    contents: [
        {news: []},
        {updates: []},
        {errors: []},
    ]
};

const listReducer = (state, action) => {
  const { type, payload } = action;
   
  switch(type) {
    case LIST_ACTION_TYPES.SET_LIST_ITEMS:
       return {
            ...state,
            payload,
       }

    default:
        throw new Error(`Unhandled type ${type} in listReducer`);
  }
};

export const ListContext = React.createContext({
  contents: {},
  addListItem: () => {},
});

export const ListProvider = (props) => {
    let timer;
  const [{contents}, dispatch] = useReducer(listReducer, INITIAL_STATE);
  console.log(contents)


const addListItem = (e) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        const listItem = e.target
        const listName = listItem.name;
    
        const active = contents.filter(content => listName == Object.keys(content))
        const [ currList ]= active
        
        const list = addItemToList(currList[listName], listItem);
        const payload = {
            listName: list
        }
        dispatch(createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, payload))
    }, 500
    )
  };

  return (
    <ListContext.Provider 
        value={{ 
            contents: contents,
            addListItem: addListItem
        }}>
      {props.children}
    </ListContext.Provider>
  );
};
