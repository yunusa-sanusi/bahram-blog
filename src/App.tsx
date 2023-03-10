import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
