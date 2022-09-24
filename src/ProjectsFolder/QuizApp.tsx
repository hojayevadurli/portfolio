import Reducer from '../QuizAppComponents/Reducer';
import Settings from '../QuizAppComponents/Settings';
import "../styles/QuizApp.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer);

function QuizApp() {
  return (
    <div className="QuizApp">
      <Settings />
    </div>
  );
}
export default QuizApp;