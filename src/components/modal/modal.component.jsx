import { Fragment } from "react"
import Button from "../UI/button/button.component"
import './modal.styles.scss'

const Modal = props => {
    const {title, onCancel, onNavigate} = props
    const hideModal = () => onCancel();

    const navigateToVersions = () => onNavigate()
    return(
        <Fragment>
            <div className="backdrop"></div>
            <div className="modal-container">
                <div className="modal-text-container">
                    <img src="./success.png" alt="Success" />
                    <h2>{title}</h2>
                </div>
                <div className="modal-action-container">
                    <Button onClick={hideModal}>Adj hozzá újat</Button>
                    <Button onClick={navigateToVersions}>Tovább a verziókhoz</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal