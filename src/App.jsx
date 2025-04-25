import Hero from "./sections/Hero";
import Navbar from "./components/HeroModel/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./components/HeroModel/LogoSection";
import FeatureCards from "./sections/FeatureCards";

const App =()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    </>
  )
}
export default App;