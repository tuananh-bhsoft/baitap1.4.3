import tw, { styled } from "twin.macro";

const StyledCallToAction = styled.button`
  ${tw`bg-primary text-white text-base tracking-widest py-[14px] px-40px border-none rounded-full shadow-[0_17px_22px_#eee] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[0_25px_50px_25px_#e6e9fd]`}
`;

const CallToActionButton = ({ children }) => {
  return <StyledCallToAction>{children}</StyledCallToAction>;
};

export default CallToActionButton;
