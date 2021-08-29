import './App.css';
import NavBar from './components/Navbar';
import MainImg from './components/mainimg';
import CardSet from './components/cardset';
import IconSec from './components/iconsec';
import CapsuleImg from './components/capsuleimg';
import TraceSec from './components/tracesec';
import Featured from './components/featured';
import Clean from './components/clean';
import MakeYrSelf from './components/makeyrself';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <MainImg/>
      <NavBar/>
      <CardSet/>
      <IconSec/>
      <CapsuleImg/>
      <TraceSec/>
      <Featured/>
      <Clean/>
      <MakeYrSelf/>
      <Footer/>
    </div>
  );
}

export default App;
