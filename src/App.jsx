import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
