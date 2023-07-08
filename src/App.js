import tw, { styled } from "twin.macro";

import Home1 from "./containers/home1";

const StyledApp = styled.div`
  ${tw`font-semibold tracking-widest`}
`;

const App = () => {
  return (
    <StyledApp>
      <Home1 />
    </StyledApp>
  );
};

export default App;
