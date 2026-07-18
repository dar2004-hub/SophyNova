import Hero from "../components/Hero";
import ExamCards from "../components/ExamCards";
import LatestNotifications from "../components/LatestNotifications";
import PreviousPapers from "../components/PreviousPapers";
import StudyResources from "../components/StudyResources";
import WhyChoose from "../components/WhyChoose";
import Statistics from "../components/Statistics";



function Home() {
  return (
    <>
      <Hero />
      <ExamCards />
      <LatestNotifications />
      <PreviousPapers />
      <StudyResources />
      <WhyChoose/>
      <Statistics/>
      
    </>
  );
}

export default Home;