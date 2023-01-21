import { useContext, useState } from "react";
import FormInput from "../../UI/form-input/form-input.component";
import Button from '../../UI/button/button.component'
import Lists from "../list/list.component";
import { FormContext } from "../../../context/form/form.component";
import { ListContext } from "../../../context/list/list.component";
import { VersionContext } from "../../../context/version/version.component";
import { UserContext} from "../../../context/user/user.context"


import './add-new.styles.scss'

let isError = "false"


const AddNewContainer = () => {
    const [isTouched, setIsTouched] = useState(false)
    const formCtx = useContext(FormContext);
    const listCtx = useContext(ListContext);
    const userCtx = useContext(UserContext);
    const versionCtx = useContext(VersionContext)

    const {versionNumber, title, date, description} = formCtx.formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();

    

            const payload = {
                versionNumber,
                title,
                date,
                description,
                contents: listCtx.contents
            }
            
            versionCtx.addVersion(payload, userCtx.currentUser.uid)

    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="main-form-container">
                <FormInput label="Verzió száma:" type="number" name="versionNumber" value={versionNumber} onChange={formCtx.changeHandler} notvalid={isError}/>
                <FormInput label="Verzió címe:" type="text" name="title" value={title} onChange={formCtx.changeHandler} notvalid={isError}/>
                <div>
                    <label htmlFor="description">Leírás:</label>
                    <textarea rows="5" cols="73" label="Description" type="richtext" name="description" value={description} onChange={formCtx.changeHandler} notvalid={isError}> </textarea>
                </div>
                <FormInput label="Dátum:" type="date" name="date" value={date} onChange={formCtx.changeHandler} notvalid={isError}/>
            </div>

            <div className="main-state-container">
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined news">
                            add_box
                        </span>
                        <label>Újjítások:</label>
                    </div>
                    <Lists state="news"/>
                </div>
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined updates">
                            cached
                        </span>
                        <label>Frissítések:</label>
                    </div>
                    <Lists state="updates"/>
                </div>
                <div className="new-container">
                    <div className="new-container--title_container">
                        <span className="material-symbols-outlined errors">
                        handyman
                        </span>
                        <label>Javítások:</label>
                    </div>
                    <Lists state="errors"/>
                </div>

            </div>
            <div className="add-new--btn-container">
                <Button type="submit">Mentés</Button>

            </div>
        </form>  
    )
}

export default AddNewContainer;