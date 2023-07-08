import tw, { styled } from "twin.macro";

const StyledPrimaryButton = styled.button`
  ${tw`bg-primary text-white text-base tracking-widest py-[14px] px-40px border-none rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m`}
`;

const PrimaryButton = ({ children }) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
};

export default PrimaryButton;
