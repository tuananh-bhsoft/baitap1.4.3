import { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import close from "../../assets/icons/design-elements/Close.svg";

const StyledHeader = styled.div`
  ${tw`fixed top-30px left-0 w-full z-10 transition-all duration-300 ease-in-out`}

  &.scrolled {
    ${tw`top-0 bg-white opacity-95 shadow-[10px_13px_80px_14px_#f2f4ff]`}
  }

  .content-wrapper {
    ${tw`flex justify-between items-center max-w-main py-10px px-0 my-0 mx-auto laptop:py-10px laptop:px-40px`}

    .nav {
      ${tw`flex justify-between items-center gap-x-40px`}

      .hamburger {
        ${tw`hidden w-30px hover:cursor-pointer laptop:block`}
      }

      .nav-links {
        ${tw`flex justify-between items-center gap-x-40px list-none laptop:hidden`}

        .nav-item {
          a {
            ${tw`no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l`}
          }

          &.active a {
            ${tw`text-primary-l font-semibold`}
          }
        }
      }

      .contact-button {
        ${tw`tablet:hidden`}
      }
    }
  }

  .side-drawer {
    ${tw`hidden laptop:block`}

    .overlay {
      ${tw`w-full h-full fixed top-0 -left-full bg-[#33333380] transition-all duration-500 ease-in-out`}

      &-shown {
        ${tw`w-full h-full fixed top-0 left-0 bg-[#33333380] transition-all duration-500 ease-in-out`}
      }
    }

    .drawer-content {
      ${tw`fixed top-0 -left-[350px] w-[350px] h-full bg-white p-20px transition-all duration-500 ease-in-out`}

      .top {
        ${tw`flex justify-between items-center`}

        .close {
          ${tw`w-30px hover:cursor-pointer`}
        }
      }

      .side-nav-links {
        ${tw`flex flex-col justify-between items-start gap-y-20px list-none pl-[5px] mt-30px`}

        .side-nav-item {
          a {
            ${tw`no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l`}
          }

          &.active a {
            ${tw`text-primary-l font-semibold`}
          }
        }
      }

      &-shown {
        ${tw`fixed top-0 left-0 w-[350px] h-full bg-white p-20px transition-all duration-500 ease-in-out`}

        .top {
          ${tw`flex justify-between items-center`}

          .close {
            ${tw`w-30px hover:cursor-pointer`}
          }
        }

        .side-nav-links {
          ${tw`flex flex-col justify-between items-start gap-y-20px list-none pl-[5px] mt-30px`}

          .side-nav-item {
            a {
              ${tw`no-underline text-tertiary-m text-base font-normal whitespace-nowrap transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-primary-l`}
            }

            &.active a {
              ${tw`text-primary-l font-semibold`}
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);
  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    const onScroll = () => {
      const scrolledHeight = window.scrollY;

      if (scrolledHeight > headerHeight) {
        setPageIsScrolled(true);
      } else {
        setPageIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleDrawerIsShown = () => {
    setDrawerIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <StyledHeader className={pageIsScrolled ? "header scrolled" : "header"}>
      <div className="content-wrapper">
        <img className="main-logo" src={mainLogo} alt="Main logo" />
        <div className="nav">
          <img
            className="hamburger"
            src={hamburgerMenu}
            alt="Hamburger"
            onClick={toggleDrawerIsShown}
          />
          <ul className="nav-links">
            <li className="nav-item active">
              <a className="" href="/">
                Home +
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="/">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="/">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="/">
                Blog
              </a>
            </li>
          </ul>
          <div className="contact-button">
            <PrimaryButton>Contact</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="side-drawer">
        <div
          className={drawerIsShown ? "overlay-shown" : "overlay"}
          onClick={toggleDrawerIsShown}
        ></div>
        <div
          className={drawerIsShown ? "drawer-content-shown" : "drawer-content"}
        >
          <div className="top">
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <img
              className="close"
              src={close}
              alt="Close"
              onClick={toggleDrawerIsShown}
            />
          </div>
          <ul className="side-nav-links">
            <li className="side-nav-item active">
              <a className="" href="/">
                Home +
              </a>
            </li>
            <li className="side-nav-item">
              <a className="" href="/">
                About
              </a>
            </li>
            <li className="side-nav-item">
              <a className="" href="/">
                Service
              </a>
            </li>
            <li className="side-nav-item">
              <a className="" href="/">
                Gallery
              </a>
            </li>
            <li className="side-nav-item">
              <a className="" href="/">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
