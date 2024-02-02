
import './App.css';
import useToken from './components/useToken';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'


function App() {
  const {token, removeToken, setToken } = useToken()
  
  return (
    <div className="App">
     <Outlet/> 
    </div>
  );
}

export default App;
