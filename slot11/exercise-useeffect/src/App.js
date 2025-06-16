import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput';
import LoginForm from './components/LoginForm';
import ValidatedForm from './components/ValidatedForm';
function App() {
  return (
    <div className="App">
      <ValidatedInput/>
      <LoginForm/>
     <ValidatedForm/>
    </div>
  );
}

export default App;
