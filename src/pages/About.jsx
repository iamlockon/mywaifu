import { useAboutContext } from "../contexts";
import AboutInfo from "../components/about/About";

const About = () => {
  const { theme, aboutData } = useAboutContext();
  return (
    <>
      <AboutInfo theme={theme} aboutData={aboutData}/>
    </>
  );
};

export default About;
