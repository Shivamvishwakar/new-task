import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import ProtectedRoute from './Protectedroute/ProtectedRoute';

function App() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>}/>
      <Route path='/menu' element={<ProtectedRoute>
        <MenuPage/>
      </ProtectedRoute>}/>
      <Route path='/checkout' element={<ProtectedRoute>
        <CheckoutPage/>
      </ProtectedRoute>}/>
    </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
