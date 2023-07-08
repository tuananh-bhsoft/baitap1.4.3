import tw, { styled } from "twin.macro";

import CallToActionButton from "../../../components/buttons/CallToAction";
import frame1 from "../../../assets/imgs/slide/Frame1.svg";

const StyledSlider = styled.div`
  ${tw`flex flex-col justify-between items-center laptop:py-0 laptop:px-40px`}

  .slide-container {
    ${tw`py-100px px-0 mt-120px`}

    .slide {
      ${tw`flex justify-between items-center gap-x-40px`}

      .slide-info {
        ${tw`flex flex-col justify-between items-start flex-1 laptop:items-center laptop:text-center`}

        .title {
          ${tw`text-primary-m text-5xl leading-tight tracking-normal`}
        }

        .description {
          ${tw` text-primary-m text-base font-normal mt-20px`}
        }

        .more-details {
          ${tw` mt-40px`}
        }
      }

      .slide-img {
        ${tw`flex-1 laptop:hidden`}

        img {
          ${tw`w-full`}
        }
      }
    }
  }

  .slide-marker {
    ${tw`flex justify-between items-center gap-x-10px`}

    .marker {
      ${tw`bg-tertiary h-1 w-4 rounded-full`}

      &.active {
        ${tw`bg-secondary-l h-2 w-6 rounded-full`}
      }
    }
  }
`;

const Slider = () => {
  return (
    <StyledSlider>
      <div className="slide-container">
        <div className="slide">
          <div className="slide-info">
            <p className="title">Clinic & beauty consultant</p>
            <p className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <div className="more-details">
              <CallToActionButton>More Details</CallToActionButton>
            </div>
          </div>
          <div className="slide-img">
            <img className="" src={frame1} alt="Slide" />
          </div>
        </div>
      </div>
      <div className="slide-marker">
        <div className="marker"></div>
        <div className="marker active"></div>
        <div className="marker"></div>
      </div>
    </StyledSlider>
  );
};

export default Slider;
