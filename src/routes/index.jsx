import { Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import Main from '../pages/Main'
import MyProfile from '../pages/MyProfile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<MyProfile/>} />
    </Routes>
  )
}

export default AppRoutes
