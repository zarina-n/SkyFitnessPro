import Logo from '../Ui/Logo'
import User from '../User'
import CoursesCarts from '../CoursesCarts'
import ButtonMain from '../Ui/ButtonMain'

import classes from './index.module.css'


const MyProfile = () => {
    const login = 'Логин: sergey.petrov96'
    const password = 'Пароль: 4fkhdj880d'

    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <Logo colorLogo='black'></Logo>
                <User/>
            </header>
            <div className={classes.information}>
                <h2 className={classes.tittle}>Мой профиль</h2>
                <p className={classes.text}>{login}</p>
                <p className={classes.text}>{password}</p>
                <div className={classes.buttons}>
                    <ButtonMain btnClassName={classes.button} content='Редактировать логин'/>
                    <ButtonMain btnClassName={classes.button} content='Редактировать пароль'/>
                </div>
            </div>
            <div>
                <h2 className={classes.tittle}>Мои курсы</h2>
                <div className={classes.cards}>
                    <CoursesCarts button={true} idCarts={['yoga', 'stretch', 'bodyflex']}/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile