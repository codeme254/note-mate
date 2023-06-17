import {Routes, Route, useLocation} from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login';
import HomeFeed from '../../pages/HomeFeed/HomeFeed';
import Temp from '../../pages/Temp/Temp';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/temp' element={<Temp />} />
          <Route path='/feed' element={<HomeFeed />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;