import { BrowserRouter } from 'react-router-dom'
import Home from '@/screens/Home/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter