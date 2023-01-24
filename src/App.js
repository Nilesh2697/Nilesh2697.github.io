import Navbar from './Components/NavBar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {About} from "./Components/About/About"
import { Contact } from './Components/Contact/Contact';
import {Scrollbar} from 'smooth-scrollbar-react';
import { Skills } from './Components/Skills/Skills'
// import styles from "../src/Components/BottomBanner/Banner.module.css"
import { Banner } from './Components/BottomBanner/Banner';
import { DrawerNav } from './Components/NavBar/DrawerNav';
import { Projects } from './Components/Projects/Projects';
import {Stats} from './Components/Stats/stats'
// import Git from './Components/git/Git';
import GitHubCalendar from 'react-github-calendar'

function App() {
  return (
    <div>
      <Navbar />
      <Scrollbar renderByPixels={true}>
        <Portfolio />
        <About />
        <Skills />
        <Projects/>
        <Stats/> 
        <div style={{width:'50%', margin: '40px auto', }}>
          <h1>Git Calender</h1>
        <GitHubCalendar username="nilesh2697" />
        </div>
        <Contact />
      </Scrollbar>
      <DrawerNav />
      <Banner />
    </div>
  );
}

export default App;
