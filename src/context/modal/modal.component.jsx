import { createContext, useState, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";

export const ModalContext = createContext({
    modalContent: {},
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
    setModal: () => {},
})

const MODAL_ACTION_TYPES = {
    SET_MODAL: "SET_MODAL",

  };
  
  const INITIAL_STATE = {
        successful: true,
        content: {}
  };

const modalReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case MODAL_ACTION_TYPES.SET_MODAL:
        return {
            ...state,
            ...payload,
        };

        default:
        throw new Error(`Unhandled type ${type} in ModalReducer`);
    }
}


export const ModalProvider = (props) => {
    const [ modalContent, dispatch] = useReducer(modalReducer, INITIAL_STATE);
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    };

    const closeModal = () => {
        setIsOpen(false)
    };

    const setModal = (payload) => {
   
      dispatch(createAction(MODAL_ACTION_TYPES.SET_MODAL, payload));
      
    }


    return <ModalContext.Provider value={{
        isOpen,
        openModal,
        closeModal,
        modalContent,
        setModal
    }}>{props.children}</ModalContext.Provider>
}
