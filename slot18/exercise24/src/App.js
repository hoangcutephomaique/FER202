import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Container className="my-5">
        <h2 className="mb-4">Redux Shopping Cart</h2>
        <ProductList />
        <Cart />
      </Container>
    </Provider>
  );
}

export default App;