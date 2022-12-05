import classes from './index.module.css'
import Modal from '../../components/Modal'
import Logo from '../../components/Ui/Logo'
import ButtonMain from '../../components/Ui/ButtonMain'

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <Modal>
                <Logo colorLogo='black' className={classes.logo}/>
                <div className={classes.inputs}>
                    <input className={classes.input} placeholder='Логин'></input>
                    <input className={classes.input} placeholder='Пароль'></input>
                </div>
                <div className={classes.buttons}>
                    <ButtonMain content='Войти'/>
                    <ButtonMain content='Зарегистрироваться' colorBtn={'white'}/>
                </div>
            </Modal>
        </div>
    )
  }
  
  export default LoginPage