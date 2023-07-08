import tw, { styled } from "twin.macro";

import professor1 from "../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../assets/icons/socials/Facebook.svg";
import insta from "../../../assets/icons/socials/Instagram.svg";

const StyledProfessionalTeams = styled.div`
  ${tw`flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-center text-center`}

    .section-header {
      ${tw`text-secondary text-base leading-tight tracking-normal`}
    }

    .section-title {
      ${tw`text-primary-m text-4xl leading-tight tracking-normal`}
    }

    .section-description {
      ${tw`text-tertiary-m text-base font-normal`}
    }
  }

  .section-content {
    ${tw`flex justify-between items-center w-full mt-100px laptop:flex-col`}

    .expert-card {
      ${tw`flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] first:bg-transparent first:relative first:-right-30px first:shadow-none last:bg-transparent last:relative last:right-30px last:shadow-none laptop:w-full laptop:first:static laptop:last:static`}

      img {
        ${tw`max-w-[146px] max-h-[146px] my-40px mx-0`}
      }

      .card-info {
        ${tw`flex flex-col justify-between items-center text-center`}

        .card-header {
          ${tw`text-secondary text-base leading-tight tracking-normal`}
        }

        .card-title {
          ${tw`text-primary-m text-lg leading-tight tracking-normal mt-20px`}
        }

        .card-description {
          ${tw`text-tertiary-m text-sm font-normal mt-20px`}
        }

        .social-links {
          ${tw`flex justify-between items-center gap-x-40px my-40px mx-0`}

          .social-icon {
            ${tw`flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}

            img {
              ${tw`w-[24px] h-[24px] m-0`}
            }
          }
        }
      }
    }
  }
`;

const ProfessionalTeams = () => {
  return (
    <StyledProfessionalTeams>
      <div className="section-info">
        <p className="section-header">Professional Teams</p>
        <p className="section-title">The Professional Expert</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="section-content">
        <div className="expert-card">
          <img className="" src={professor1} alt="Card" />
          <div className="card-info">
            <p className="card-header">Surgeon</p>
            <p className="card-title">Briyan Nevalli</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img className="" src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon ">
                <img className="" src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img className="" src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img className="" src={professor2} alt="Card" />
          <div className="card-info">
            <p className="card-header">Dermatologist</p>
            <p className="card-title">Bella Sebastian</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon ">
                <img
                  className="w-[24px] h-[24px] m-0"
                  src={twitter}
                  alt="Twitter"
                />
              </div>
              <div className="social-icon ">
                <img className="" src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img className="" src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img className="" src={professor3} alt="Card" />
          <div className="card-info">
            <p className="card-header">Stylist expert</p>
            <p className="card-title">Lilly Adams</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img className="" src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img className="" src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img className="" src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProfessionalTeams>
  );
};

export default ProfessionalTeams;
