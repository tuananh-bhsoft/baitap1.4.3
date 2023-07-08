import tw, { styled } from "twin.macro";

import CallToActionButton from "../../../components/buttons/CallToAction";
import PlayButton from "../../../components/buttons/Play";
import aboutusImg from "../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

const StyledAboutUs = styled.div`
  ${tw`flex justify-between items-center gap-x-40px mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px flex-1 items-start laptop:items-center laptop:text-center`}

    .section-header {
      ${tw`text-secondary text-base leading-tight tracking-normal`}
    }

    .section-title {
      ${tw`text-primary-m text-4xl leading-tight tracking-normal`}
    }

    .section-description {
      ${tw`text-tertiary-m text-base font-normal`}
    }

    .actions {
      ${tw`flex justify-between items-center gap-x-40px mt-60px laptop:self-center`}

      .learn-more {
      }

      .watch-video {
        ${tw`flex justify-between items-center gap-x-10px laptop:hidden`}

        p {
          ${tw`text-tertiary-m text-base`}
        }
      }
    }
  }

  .section-content {
    ${tw`flex-1 w-6/12 laptop:hidden`}

    img {
      ${tw`w-full`}
    }
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="section-info">
        <p className="section-header">About Us</p>
        <p className="section-title">We are the best beauty clinic</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </p>
        <div className="actions">
          <div className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </div>
          <div className="watch-video">
            <PlayButton />
            <p className="">Watch Video</p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <img className="" src={aboutusImg} alt="About us" />
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
