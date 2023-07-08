import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";

import RollToTopButton from "../buttons/RollToTop";
import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import bullet from "../../assets/icons/design-elements/Bullet.svg";

const StyledFooter = styled.div`
  ${tw`pt-200px mt-200px laptop:pt-200px laptop:pr-40px laptop:pb-0 laptop:pl-40px`}

  .content-wrapper {
    ${tw`flex flex-col justify-between items-center max-w-main my-0 mx-auto`}

    .footer-info {
      ${tw`flex justify-between items-start w-full laptop:flex-col laptop:gap-y-60px`}

      .authorship {
        ${tw`flex flex-col justify-between items-start gap-y-20px flex-1 laptop:w-full`}

        p {
          ${tw`text-primary-sl text-base font-normal`}

          span {
            ${tw`font-bold`}
          }
        }

        .info {
          ${tw`italic text-sm flex flex-col justify-between items-start`}

          .contact-info {
            ${tw`flex justify-between items-center gap-x-40px`}
          }
        }
      }

      .site-doc {
        ${tw`flex-1 flex justify-between items-start laptop:flex-col gap-y-60px w-full`}

        .sitemap,
        .documents {
          ${tw`flex-1`}

          .list-header {
            ${tw`text-white text-lg`}
          }

          .list {
            list-style-image: url(${bullet});
            padding-left: 12px;
            padding-top: 15px;

            .list-item {
              ${tw`text-primary-sl text-base font-normal mt-10px`}
            }
          }
        }
      }
    }

    .footer-socials {
      ${tw`flex justify-between items-center gap-x-40px w-full my-100px mx-0 tablet:flex-col tablet:gap-y-40px`}

      .social-links {
        ${tw`flex justify-between items-center gap-x-40px`}

        img {
          ${tw`w-[24px] h-[24px]`}
        }
      }

      .copyright {
        ${tw`text-primary-sl text-base font-normal`}
      }
    }
  }
`;

const Footer = () => {
  const [rollToTopIsShown, setRollToTopIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setRollToTopIsShown(true);
      } else {
        setRollToTopIsShown(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledFooter className="footer">
      <div className="content-wrapper">
        <div className="footer-info">
          <div className="authorship">
            <img src={footerLogo} alt="Footer logo" />
            <p className="">
              <span className="">Beautice</span> is a Beauty Clinic WordPress
              Theme.
            </p>
            <div className="info">
              <p className="">Baker Steet 101, NY, United States.</p>
              <div className="contact-info">
                <p className="">+521 569 8966.</p>
                <p className="">mail@company.com.</p>
              </div>
            </div>
          </div>
          <div className="site-doc">
            <div className="sitemap">
              <p className="list-header">Pages</p>
              <ul className="list">
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Services</li>
                <li className="list-item">Gallery</li>
                <li className="list-item">Team</li>
              </ul>
            </div>
            <div className="documents">
              <p className="list-header">Informations</p>
              <ul className="list">
                <li className="list-item">Terms & Conditions</li>
                <li className="list-item">Privacy policy</li>
                <li className="list-item">Blog</li>
                <li className="list-item">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <div className="social-links">
            <img className="" src={facebookLight} alt="Facebook" />
            <img className="" src={twitterLight} alt="Twitter" />
            <img className="" src={linkedinLight} alt="Linkedin" />
            <img className="" src={youtubeLight} alt="Youtube" />
            <img className="" src={instaLight} alt="Instagram" />
          </div>
          <p className="copyright">
            © AltDesain Studio 2021 - All right reserved.
          </p>
        </div>
      </div>
      {rollToTopIsShown && <RollToTopButton />}
    </StyledFooter>
  );
};

export default Footer;
