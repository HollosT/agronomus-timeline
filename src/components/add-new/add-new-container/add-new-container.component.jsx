import { Fragment, useContext, useState } from "react";
import FormInput from "../../UI/form-input/form-input.component";
import Button from '../../UI/button/button.component'
import Lists from "../list/list.component";
import { FormContext } from "../../../context/form/form.component";
import { ListContext } from "../../../context/list/list.component";
import { VersionContext } from "../../../context/version/version.component";
import { UserContext} from "../../../context/user/user.context"
import { ModalContext } from "../../../context/modal/modal.component";
import Modal from "../../modal/modal.component";


import './add-new.styles.scss'
import { useNavigate } from "react-router-dom";


let isError = "false"


const AddNewContainer = () => {
    const modalCtx = useContext(ModalContext)
    const [btnState, setBtnState] = useState('inactive')
    const formCtx = useContext(FormContext);
    const listCtx = useContext(ListContext);
    const userCtx = useContext(UserContext);
    const versionCtx = useContext(VersionContext)
    const navigate = useNavigate()

    const {isOpen: modalIsOpen, openModal, closeModal, setModal} = modalCtx

    const {versionNumber, title, date, description} = formCtx.formFields;

    const changeHandler = (event) => {
        formCtx.changeHandler(event)
        if(versionNumber.length === 0 || title.length === 0 ||  description.length === 0 ||  date.length === 0) {
            setBtnState('inactive')
        } else {

            setBtnState('')
        }
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
            const payload = {
                created: new Date().getTime(),
                versionNumber,
                title,
                date,
                description,
                contents: listCtx.contents
            }
          try {
             versionCtx.addVersion(payload, userCtx.currentUser.uid)
          
            setModal({successful: true, content: {versionNumber, title}})
            formCtx.clearFields();
            listCtx.clearLists();

          }  catch(error) {
            console.log(error)

          } finally{
            openModal()
          }

    }

    const updateModal = () => {
       closeModal()
    }


    const openVersions = () => {
        navigate('/')
    }

    return (
        <Fragment>
            {modalIsOpen && <Modal onCancel={updateModal} onNavigate={openVersions}/>}
            <form className="form-container" onSubmit={handleSubmit}>
            <div className="main-form-container">
                <FormInput label="Verzi?? sz??ma:" type="number" name="versionNumber" value={versionNumber} onChange={changeHandler} onBlur={changeHandler} onFocus={changeHandler} notvalid={isError}/>
                <FormInput label="Verzi?? c??me:" type="text" name="title" value={title} onChange={changeHandler} onBlur={changeHandler} onFocus={changeHandler} notvalid={isError}/>
                <div>
                    <label htmlFor="description">Le??r??s:</label>
                    <textarea rows="5" cols="73" label="Description" type="richtext" name="description" value={description} onBlur={changeHandler} onChange={changeHandler} onFocus={changeHandler} notvalid={isError}> </textarea>
                </div>
                <FormInput label="D??tum:" type="date" name="date" value={date} onChange={changeHandler} onBlur={changeHandler} onFocus={changeHandler} notvalid={isError}/>
            </div>

            <div className="main-state-container">
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined news">
                            add_box
                        </span>
                        <label>??j??t??sok:</label>
                    </div>
                    <Lists  state="news" />
                </div>
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined updates">
                            cached
                        </span>
                        <label>Friss??t??sek:</label>
                    </div>
                    <Lists state="updates"/>
                </div>
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined errors">
                        handyman
                        </span>
                        <label>Jav??t??sok:</label>
                    </div>
                    <Lists state="errors"/>
                </div>

            </div>
            <div className="add-new--btn-container">
                <Button type="submit" buttonType={btnState}>Ment??s</Button>

            </div>
         </form>  
        </Fragment>
        
    )
}

export default AddNewContainer;