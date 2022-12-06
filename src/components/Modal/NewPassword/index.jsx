import classes from './index.module.css'
import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

const NewPassword = () => {
    return (
        <form className={classes.form}>
            <Logo colorLogo='black' className={classes.logo}/>
            <h3 className={classes.title}>Новый пароль:</h3>
            <div className={classes.inputs}>
                <input className={classes.input} type='password' placeholder='Пароль'></input>
                <input className={classes.input} type='password' placeholder='Повторите пароль'></input>
            </div>
            <div className={classes.buttons}>
                <ButtonMain content='Сохранить'/>
            </div>
        </form>
    )
  }
  
  export default NewPassword