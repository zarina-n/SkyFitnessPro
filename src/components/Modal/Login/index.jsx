import classes from './index.module.css'
import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

const LoginModal = () => {
    return (
        <form className={classes.form}>
            <Logo colorLogo='black' className={classes.logo}/>
            <div className={classes.inputs}>
                <input className={classes.input} placeholder='Логин'></input>
                <input className={classes.input} type="password" placeholder='Пароль'></input>
            </div>
            <div className={classes.buttons}>
                <ButtonMain content='Войти'/>
                <ButtonMain content='Зарегистрироваться' colorBtn={'white'}/>
            </div>
        </form>
    )
  }
  
  export default LoginModal