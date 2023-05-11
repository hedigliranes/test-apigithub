import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Profile from './profile/Profile'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
        </Routes>
    );
}

export default AppRoutes;