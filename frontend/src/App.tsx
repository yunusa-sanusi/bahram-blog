import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InputField from './components/InputField';
import Button from './components/Button';

function App() {
  return (
    <div className="bg-background">
      <InputField />
      <Button />
      {/* <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
