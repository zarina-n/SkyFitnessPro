import { Routes, Route } from 'react-router-dom'
import AboutCoursePage from '../pages/AboutCourse'
import NotFound from '../pages/NotFound'
import Main from '../pages/Main'
import Workout from '../pages/Workout'
import MyProfile from '../pages/MyProfile'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/about/:title" element={<AboutCoursePage />} />
      <Route path="/" element={<Main />} />
      <Route path="workout" element={<Workout />} />
      <Route path="profile" element={<MyProfile />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
