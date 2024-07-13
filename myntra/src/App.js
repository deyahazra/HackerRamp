import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './landing/pages/home';
import './App.css';
import Auth from './users/pages/Auth';
import Myntra from './landing/pages/mynta';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/components/hooks/auth-hook';
import { AnimatePresence, motion } from 'framer-motion';
import Trendsetter from './landing/components/TrendSetter/trendsetter';
import Product from './landing/components/Dashboard/product';
import Post_Perfect from './landing/components/Post_Challenges/post_perfect';
import Challenges from './landing/components/Post_Challenges/challenges';
import Fashion_Quiz from './landing/components/Quiz/fashionquiz';
import Quiz from './landing/components/Quiz/quizset';
import QuizSet2 from './landing/components/Quiz/quizset2';
import QuizSet from './landing/components/Quiz/quizset';

const RouteTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence >
      <motion.div key={location.pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;
  
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/post_perfect" element={<Post_Perfect/>}/>
        <Route path="/challenges" element={<Challenges/>} />
        <Route path="/fashion_quiz" element={<Fashion_Quiz/>} /> 
        <Route path="/quiz-set" element={<QuizSet/>} />
        <Route path="/quiz-set2" element={<QuizSet2/>} />
        <Route path="/trendsetter" element={<Trendsetter/>}/>
        <Route path="/patients_profile/:patient_id" element={
          <RouteTransition>
          </RouteTransition>
        } />
        <Route path="/myntra" element={<Myntra />} />
        <Route path="*" element={<Navigate to="/myntra" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {routes}
    </AuthContext.Provider>
  );
}

export default App;