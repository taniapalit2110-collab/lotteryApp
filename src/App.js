import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import LotteryTable from './Components/LotteryTable';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Header/>
      <LotteryTable/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
