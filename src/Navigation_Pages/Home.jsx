import Hero from "../components/Hero";
import LatestNotifications from "../components/LatestNotifications";
import StudyResources from "../components/StudyResources";
import WhyChoose from "../components/WhyChoose";
import Statistics from "../components/Statistics";



function Home() {
  return (
    <>
      <Hero />
      <LatestNotifications />
      <StudyResources />
      <WhyChoose/>
      <Statistics/>
      
    </>
  );
}

export default Home;