import './App.css';
import BookingForm from './components/bookingForm';
import PizzaCarousel from './components/carousel';
import Header from './components/header';
import Menu from './components/menu';
function App() {
    return (
        <div className="bg-dark text-white">
            <Header/>
            <PizzaCarousel/>
            <Menu/>
            <BookingForm/>
        </div>
    );
}

export default App;