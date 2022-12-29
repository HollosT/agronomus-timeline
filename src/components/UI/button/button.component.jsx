import './button.styles.scss'


const BUTTON_TYPE_CLASSES = { 
    active: 'active',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherPorps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherPorps}>
            {children}
        </button>
    )
}

export default Button;