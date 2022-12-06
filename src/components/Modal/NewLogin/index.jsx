import classes from './index.module.css'
import Logo from '../../Ui/Logo'
import ButtonMain from '../../Ui/ButtonMain'

const NewLogin = () => {
    return (
        <>
            <Logo colorLogo='black' className={classes.logo}/>
            <h3 className={classes.title}>Новый логин:</h3>
            <div className={classes.inputs}>
                <input className={classes.input} placeholder='Логин'></input>
            </div>
            <div className={classes.buttons}>
                <ButtonMain content='Сохранить'/>
            </div>
        </>
    )
  }
  
  export default NewLogin