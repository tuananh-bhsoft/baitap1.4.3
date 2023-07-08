import tw, { styled } from "twin.macro";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const StyledPlayButton = styled.div`
  ${tw`bg-secondary-m flex justify-center items-center p-20px rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-l hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}
`;

const PlayButton = () => {
  return (
    <StyledPlayButton>
      <img src={playIcon} alt="Play button" />
    </StyledPlayButton>
  );
};

export default PlayButton;
