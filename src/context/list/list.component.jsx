import { useReducer, createContext } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";

const addItemToList = (list, item) => {
  const { name, id, value } = item;

  const exisitingListItem = list.find((listItem) => listItem.id === item.id);

  if (exisitingListItem) {

    return list.map(listItem => 
        listItem.id === id ? listItem.content = value : listItem
    )

  } else {
      return list.push({ id: id, content: value });
  }
};

const LIST_ACTION_TYPES = {
  SET_LIST_ITEMS: "SET_LIST_ITEMS",
  INIT_LIST_ITEMS: "INIT_LIST_ITEMS"
};

const INITIAL_STATE = {
  contents: [{ news: [] }, { updates: [] }, { errors: [] }],
};

const listReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_ACTION_TYPES.SET_LIST_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case LIST_ACTION_TYPES.INIT_LIST_ITEMS:
      return state = { contents: [{ news: [] }, { updates: [] }, { errors: [] }] };

    default:
      throw new Error(`Unhandled type ${type} in listReducer`);
  }
};

export const ListContext = createContext({
  contents: {},
  addListItem: () => {},
  clearLists: () => {}
});

export const ListProvider = (props) => {
  let timer;

  const [{ contents }, dispatch] = useReducer(listReducer, INITIAL_STATE);
 

  const addListItem = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const listItem = e.target;
      const listName = listItem.name;

      const active = contents.filter(
        (content) => listName == Object.keys(content)
      );
      const [currList] = active;

      const list = addItemToList(currList[listName], listItem);
      const payload = {
        listName: list,
      };
      dispatch(createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, payload));
    }, 500);
  };

  const clearLists = () => {
 
    dispatch(createAction(LIST_ACTION_TYPES.INIT_LIST_ITEMS));
    console.log(contents)
  }

  return (
    <ListContext.Provider
      value={{
        contents: contents,
        addListItem: addListItem,
        clearLists,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
