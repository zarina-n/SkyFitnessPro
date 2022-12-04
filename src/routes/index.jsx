import { Routes, Route } from 'react-router-dom'
import AboutCourse from '../pages/AboutCourse'

import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<AboutCourse />} />
    </Routes>
  )
}

export default AppRoutes
