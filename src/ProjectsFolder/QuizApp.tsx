import Reducer from '../QuizAppComponents/Reducer';
import Settings from '../QuizAppComponents/Settings';
import "../styles/QuizApp.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { useState,useRef, useCallback, useEffect, useMemo  } from 'react';

const store = createStore(Reducer);

function QuizApp() {

  const [name, setName] = useState("");

  const[dark, setDark]=useState(false)
  const theme ={
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF':'#333'
  }
  return (
    <div style={theme} className="QuizApp">
      <button onClick={()=>setDark(prevDark=> !prevDark)}>
        Toggle Theme
      </button>
      <Settings />
    </div>
  );
}
export default QuizApp;