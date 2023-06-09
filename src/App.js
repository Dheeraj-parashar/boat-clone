import './App.css';
import BestSeller from './components/BestSeller';
import NoticeBoard from './components/header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Slider2 from './components/Slider2';
import DailyDeal from './components/DailyDeal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NoticeBoard/>
      <Navbar/>
      <Slider/>
      <Slider2/>
      <BestSeller/>
      <DailyDeal/>
      <Footer/>
          </div>
  );
}

export default App;
