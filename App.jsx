import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@context/AuthContext';
import SignIn from '@components/SignIn';
import SignUp from '@components/SignUp';
import ProtectedRoute from '@components/ProtectedRoute';
import Dashboard from '@components/Dashboard';
import Navbar from '@components/Navbar';
import Home from '@pages/Home/Home';
import CategoryPage from '@pages/CategoryPage/CategoryPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App; 