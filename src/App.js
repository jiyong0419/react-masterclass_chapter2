import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;
const animation = keyframes`
  0%{
    background-color: purple;
    border-radius: 0px;
  }
  50%{
    background-color: wheat;
    border-radius: 50px;
  }
  100%{
    background-color: purple;
    border-radius: 0px;
    }
`;
const H1 = styled.h1``;
const AnimationBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: purple;
  animation: ${animation} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  ${H1} {
    color: white;
    &:hover {
      color: red;
    }
  }
`;

function App() {
  return (
    <Father>
      <AnimationBox>
        <H1>Good</H1>
      </AnimationBox>
      <H1>Look</H1>
    </Father>
  );
}

export default App;
