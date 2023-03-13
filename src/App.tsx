import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import { useUserContext } from './contexts/UserContext';

function App() {
  const { categories, getLoggedInUser, fetchCategories } = useUserContext();

  useEffect(() => {
    getLoggedInUser();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
