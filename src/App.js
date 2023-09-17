import Home from "./coomponents/Home";
import NavBar from "./coomponents/NavBar";
import SocialMedia from "./coomponents/SocialMedia";
import About from "./coomponents/About";
import Projects from "./coomponents/Projects";
import TechStack from "./coomponents/TechStack";
import Contact from "./coomponents/Contact";


function App() {

  return (
    
    <div  >
      <NavBar/>
      <Home />
      <About/>
      <div className="h-screen"/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <SocialMedia/>
    </div>
  );
}

export default App;
