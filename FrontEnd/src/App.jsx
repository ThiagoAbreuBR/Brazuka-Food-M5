import NavBar from './componentes/NavBar'
import FooterAnimated from './componentes/FooterAnimated'
import { Outlet } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRoutes />
        <Outlet />
        <FooterAnimated/>
      </div>
    </BrowserRouter>
  )
}

export default App
