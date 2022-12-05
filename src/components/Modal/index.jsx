import classes from './index.module.css'

const Modal = ({children}) => {
    return (
        <div className={classes.modal}>
            {children}
        </div>
    )
}

export default Modal 