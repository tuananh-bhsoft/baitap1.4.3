import tw, { styled } from "twin.macro";

import animation1 from "../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../assets/imgs/service/Animation3.svg";

const StyledMainServices = styled.div`
  ${tw`flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-center text-center`}

    .section-title {
      ${tw`text-primary-m text-4xl leading-tight tracking-normal w-2/5 laptop:w-3/5 mobile:w-full`}
    }

    .section-description {
      ${tw`text-tertiary-m text-base font-normal w-4/5 laptop:w-11/12 mobile:w-full`}
    }
  }

  .section-content {
    ${tw`grid grid-cols-3 gap-x-60px mt-100px laptop:grid-cols-2 laptop:gap-y-60px tablet:grid-cols-1`}

    .service-card {
      ${tw`flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] transition-all duration-300 ease-in-out hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}

      img {
        ${tw`max-w-[166px] max-h-[166px]`}
      }

      .card-info {
        ${tw`flex flex-col justify-between items-center text-center`}

        .card-title {
          ${tw`text-primary-m text-lg leading-tight tracking-normal mt-20px`}
        }

        .card-description {
          ${tw`text-tertiary-m text-sm font-normal mt-20px w-[110%]`}
        }
      }
    }
  }
`;

const MainServices = () => {
  return (
    <StyledMainServices>
      <div className="section-info">
        <p className="section-header text-secondary text-base leading-tight tracking-normal">
          Main Services
        </p>
        <p className="section-title">Learn services to focus on your beauty</p>
        <p className="section-description">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="section-content">
        <div className="service-card">
          <img className="" src={animation1} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty consultation</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img className="" src={animation2} alt="Card" />
          <div className="card-info">
            <p className="card-title">Skin treatments</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img className="" src={animation3} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty product</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
      </div>
    </StyledMainServices>
  );
};

export default MainServices;
