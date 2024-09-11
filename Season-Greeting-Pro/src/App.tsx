import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import ResultPage from './Components/FinalResult';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
};

export default App;
