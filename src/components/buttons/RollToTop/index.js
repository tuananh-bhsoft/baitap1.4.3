import tw, { styled } from "twin.macro";

import rollToTop from "../../../assets/icons/design-elements/RollToTop.svg";

const StyledRollToTop = styled.div`
  div {
    ${tw`w-9 h-9 bg-primary rounded-[5px] flex justify-center items-center fixed right-50px bottom-100px transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[-2px_6px_16px_-1px_#e6e9fd]`}
  }
`;

const RollToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <StyledRollToTop onClick={scrollToTop}>
      <div className="">
        <img src={rollToTop} alt="Roll to top button" />
      </div>
    </StyledRollToTop>
  );
};

export default RollToTopButton;
