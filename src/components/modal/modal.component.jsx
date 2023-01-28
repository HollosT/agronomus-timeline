import { Fragment } from "react"
import Button from "../UI/button/button.component"
import './modal.styles.scss'


const Modal = props => {
    const {status, onCancel, onNavigate, content} = props
    const {versionNumber, title} = content
    const hideModal = () => onCancel();

    const navigateToVersions = () => onNavigate()


    return(
        <Fragment>
            <div className="backdrop"></div>
            <div className="modal-container">
                <div className="modal-header-container">
                    <h2>{status ? "Sikeres művelet" :  "Oops, valami probléma merült fel"}</h2>
                </div>
                <div className="modal-text-container">
                    <img src="./success.png" alt="Success" />
                    {status ? (<p>A <span>{versionNumber}. {title}</span> verziót sikeresen mentetted.</p>) : <p>Problem</p>}
                </div>
                <div className="modal-action-container">
                    <Button onClick={hideModal} >Adj hozzá újat</Button>
                    <Button onClick={navigateToVersions}>Tovább a verziókhoz</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal