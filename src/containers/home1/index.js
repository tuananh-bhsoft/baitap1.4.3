import tw, { styled } from "twin.macro";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "./Slider";
import MainServices from "./MainServices";
import AboutUs from "./AboutUs";
import ProfessionalTeams from "./ProfessionalTeams";
import ContactUs from "./ContactUs";
import slideBG from "../../assets/imgs/bgs/SlideBackground.png";
import bg1 from "../../assets/imgs/bgs/BG1.png";
import bg2 from "../../assets/imgs/bgs/BG2.png";
import FooterBG from "../../assets/imgs/bgs/FooterBG.png";

const StyledHome1 = styled.div`
  .bg-section-1 {
    background: url(${slideBG}) no-repeat top left;
    background-size: 90% 100%;
  }

  .bg-section-2 {
    background: url(${bg1}) no-repeat bottom right;
    background-size: 60% 60%;
  }

  .bg-section-3 {
    background: url(${bg2}) no-repeat bottom left;
    background-size: 80% 60%;
  }

  .bg-section-4 {
    background: url(${FooterBG}) no-repeat center bottom;
    background-size: cover;
  }

  .container {
    ${tw`max-w-main my-0 mx-auto`}
  }
`;

const Home1 = () => {
  return (
    <StyledHome1>
      <Header />

      <div className="bg-section-1 bg-[url('./assets/imgs/bgs/SlideBackground.png')] bg-no-repeat bg-left-top bg-[length:90%_100%]">
        <div className="container">
          <Slider />
        </div>
      </div>

      <div className="bg-section-2 bg-[url('./assets/imgs/bgs/BG1.png')] bg-no-repeat bg-right-bottom bg-[length:60%_60%]">
        <div className="container">
          <MainServices />
          <AboutUs />
        </div>
      </div>

      <div className="bg-section-3 bg-[url('./assets/imgs/bgs/BG2.png')] bg-no-repeat bg-left-bottom bg-[length:80%_60%]">
        <div className="container">
          <ProfessionalTeams />
          <ContactUs />
        </div>
      </div>

      <div className="bg-section-4 bg-[url('./assets/imgs/bgs/FooterBG.png')] bg-no-repeat bg-bottom bg-cover">
        <Footer />
      </div>
    </StyledHome1>
  );
};

export default Home1;
