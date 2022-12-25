import { Routes, Route } from 'react-router-dom'
import AboutCoursePage from '../pages/AboutCourse'
import NotFound from '../pages/NotFound'
import Main from '../pages/Main'
import Workout from '../pages/Workout'
import MyProfile from '../pages/MyProfile'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" exact element={<Main />} />
      <Route path="/about/:title" element={<AboutCoursePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/profile" element={<MyProfile />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
