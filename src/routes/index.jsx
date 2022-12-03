import { Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Workout from '../pages/Workout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="workout" element={<Workout />} />
    </Routes>
  )
}

export default AppRoutes
