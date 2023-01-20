import { useContext } from "react";
import FormInput from "../../UI/form-input/form-input.component";
import Button from '../../UI/button/button.component'
import Lists from "../list/list.component";
import { FormContext } from "../../../context/form/form.component";
import { ListContext } from "../../../context/list/list.component";
import { VersionContext } from "../../../context/version/version.component";
import { UserContext} from "../../../context/user/user.context"


import './add-new.styles.scss'



const AddNewContainer = () => {
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
            <div>
                <FormInput label="Verzió száma:" type="number" name="versionNumber" value={versionNumber} onChange={formCtx.changeHandler}/>
                <FormInput label="Verzió címe:" type="text" name="title" value={title} onChange={formCtx.changeHandler}/>
                <FormInput label="Dátum:" type="date" name="date" value={date} onChange={formCtx.changeHandler}/>
                <textarea rows="5" cols="73" label="Description" type="richtext" name="description" value={description} onChange={formCtx.changeHandler}> </textarea>
            </div>

            <div className="main-state-container">
                <div className="new-container">
                    <label>Újjítások:</label>
                    <Lists state="news"/>
                </div>
                <div className="new-container">
                    <label>Frissítések:</label>
                    <Lists state="updates"/>
                </div>
                <div className="new-container">
                    <label>Javítások:</label>
                    <Lists state="errors"/>
                </div>

            </div>
            <Button type="submit">Add</Button>
        </form>  
    )
}

export default AddNewContainer;