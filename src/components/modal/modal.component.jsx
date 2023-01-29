import { Fragment, useContext } from "react"
import { ModalContext } from "../../context/modal/modal.component"
import Button from "../UI/button/button.component"

import './modal.styles.scss'


const Modal = props => {
    const modalCtx = useContext(ModalContext)
    const {content, successful} = modalCtx.modalContent;
    const {onCancel, onNavigate} = props

    // const hideModal = () => onCancel();

    const navigateToVersions = () => {
        onCancel();
        onNavigate()
    }


    return(
        <Fragment>
            <div className="backdrop"></div>
            <div className="modal-container">
                <div className="modal-header-container">
                    <h2>{successful ? "Sikeres művelet" :  "Oops, valami probléma merült fel"}</h2>
                </div>
                <div className="modal-text-container">
                    <img src="./success.png" alt="Success" />
                    {successful ? (<p>A <span>{content.versionNumber}. {content.title}</span> verziót sikeresen mentetted.</p>) : <p>Problem</p>}
                </div>
                <div className="modal-action-container">
                    <Button onClick={navigateToVersions}>Tovább a verziókhoz</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal