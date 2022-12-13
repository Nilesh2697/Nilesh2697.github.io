import Navbar from './Components/NavBar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {About} from "./Components/About/About"
import { Contact } from './Components/Contact/Contact';
import {Scrollbar} from 'smooth-scrollbar-react';
import { Skills } from './Components/Skills/Skills'
// import styles from "../src/Components/BottomBanner/Banner.module.css"
import { Banner } from './Components/BottomBanner/Banner';
import { DrawerNav } from './Components/NavBar/DrawerNav';

function App() {
  return (
    <div>
      <Scrollbar renderByPixels={true}>
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </Scrollbar>
      <DrawerNav />
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
