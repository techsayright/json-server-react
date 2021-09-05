import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { SignUp } from './components/SignUp';

function App() {
  const [isShowLogin, setShowLogin] = useState(false)
  const [isShowHome, setShowHome] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth')==="1"){
      setShowHome(true)
      setShowLogin(false) 
    }
  },[])

  return (
    <div className="App">
      {(!isShowHome && !isShowLogin) && <SignUp setShowLogin={setShowLogin}/>}
      {isShowLogin && <Login setShowLogin={setShowLogin} setShowHome={setShowHome}/>}
      {isShowHome && <Home setShowHome={setShowHome} setShowLogin={setShowLogin}/>}
    </div>
  );
}

export default App;
