import Reducer from '../QuizAppComponents/Reducer';
import Settings from '../QuizAppComponents/Settings';
import "../styles/QuizApp.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { useState,useRef, useCallback, useEffect, useMemo  } from 'react';

const store = createStore(Reducer);

function QuizApp() {

  const [name, setName] = useState("");
  const previousName = useRef('');

  useEffect(() => {
    previousName.current = name;
  }, [name]);

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
      <input value={name}  onChange={(e) => setName(e.target.value)}/>
      <div> My Name is: {name} and it used to be {previousName.current}
      
      
      </div>

      <Settings />
    </div>
  );
}
export default QuizApp;