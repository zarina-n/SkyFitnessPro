import { Routes, Route } from 'react-router-dom'
import AboutCourse from '../pages/AboutCourse'

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
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutCourse />} />
      <Route path="workout" element={<Workout />} />
      <Route path="profile" element={<MyProfile />} />
<<<<<<< HEAD
=======
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
>>>>>>> master
    </Routes>
  )
}

export default AppRoutes
