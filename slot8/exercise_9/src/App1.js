import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App1() {
  return (
      <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App1;
