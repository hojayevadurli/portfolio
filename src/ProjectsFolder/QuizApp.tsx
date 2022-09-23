import Reducer from '../QuizAppComponents/Reducer';
import Settings from '../QuizAppComponents/Settings';
import "../styles/QuizApp.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer);

function QuizApp() {
  return (
    <div className="QuizApp">
      <h1>Quiz App</h1>
      <Settings />
    </div>
  );
}
export default QuizApp;