import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const MainLayout = () => {
    return (
        <div className='min-h-screen bg-black flex flex-col'>
            <Navbar/>
            <Outlet/>
            <Footer />
        </div>
    )
}

export default MainLayout