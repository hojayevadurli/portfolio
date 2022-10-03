import Reducer from '../QuizAppComponents/Reducer';
import Settings from '../QuizAppComponents/Settings';
import "../styles/QuizApp.css"
import { useContext } from 'react';
import AuthContext from '../AutStore/AuthContext.js'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { useState,useRef, useCallback, useEffect, useMemo  } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../pages/Auth';
import { Navigate } from 'react-router-dom';
// import {isLogin} from '../pages/Auth';
// const store = createStore(Reducer);

function QuizApp() {
  const loggedIn=true;
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  const [name, setName] = useState("");

  const[dark, setDark]=useState(false)
  const theme ={
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF':'#333'
  }
console.log(loggedIn)
  
  return (
    <div style={theme} className="QuizApp">
    
      {isLoggedIn ?  <Navigate to="/Settings" /> : <Navigate to="/Auth" />}
      {isLoggedIn && (
              <button onClick={logoutHandler}>Logout</button>
          )}
    
    </div>
  );

  
}
export default QuizApp;