import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
