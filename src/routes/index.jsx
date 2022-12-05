import { Routes, Route } from 'react-router-dom'
import AboutCourse from '../pages/AboutCourse'
import NotFound from '../pages/NotFound'
import Main from '../pages/Main'
import Workout from '../pages/Workout'
import MyProfile from '../pages/MyProfile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/about:course" element={<AboutCourse />} />
      <Route path="/" element={<Main />} />
      <Route path="workout" element={<Workout />} />
      <Route path="profile" element={<MyProfile />} />
    </Routes>
  )
}

export default AppRoutes
