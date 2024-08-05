import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <div className="App flex flex-col min-h-screen">
    <NavigationBar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default App
