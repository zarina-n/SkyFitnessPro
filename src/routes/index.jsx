import { Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Main from '../pages/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default AppRoutes
