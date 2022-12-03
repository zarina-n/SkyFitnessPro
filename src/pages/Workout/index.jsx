import ReactPlayer from 'react-player/youtube'
import Logo from '../../components/Ui/Logo/index'
import User from '../../components/User/index'
import Exercises from '../../components/Exercises/index'
import Progress from '../../components/Progress'
import classes from './index.module.css'

const Workout = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Logo />
          <User />
        </nav>
      </header>
      <main className={classes.main}>
        <h1 className={classes.heading}>Йога</h1>
        <h2 className={classes.title}>
          Красота и здоровье / Йога на каждый день / 2 день
        </h2>
        <div className={classes.player}>
          <ReactPlayer
            url={'https://youtu.be/v-xTLFDhoD0'}
            width="100%"
            height="100%"
          />
        </div>
        <div className={classes.exercises}>
          <Exercises />
          <Progress />
        </div>
      </main>
    </div>
  )
}

export default Workout
