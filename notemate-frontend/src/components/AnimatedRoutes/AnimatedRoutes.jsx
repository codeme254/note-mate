import {Routes, Route, useLocation} from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';
import SignUp from '../../pages/SignUp/SignUp';
import Login from '../../pages/Login/Login';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;