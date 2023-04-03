import Header from './components/header/Header';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import SecondSlider from './components/secondSlider/SecondSlider';
import { Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Contacts from './pages/ContactsPage/ContactsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
