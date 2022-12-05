import classes from './index.module.css'
import Modal from '../../components/Modal'
import Logo from '../../components/Ui/Logo'
import ButtonMain from '../../components/Ui/ButtonMain'

const SignUpPage = () => {
    return (
        <div className={classes.wrapper}>
            <Modal>
                <Logo colorLogo='black' className={classes.logo}/>
                <div className={classes.inputs}>
                    <input className={classes.input} placeholder='Логин'></input>
                    <input className={classes.input} placeholder='Пароль'></input>
                    <input className={classes.input} placeholder='Повторите пароль'></input>
                </div>
                    <ButtonMain content='Зарегистрироваться'/>
            </Modal>
        </div>
    )
  }
  
  export default SignUpPage