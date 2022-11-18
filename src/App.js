import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 100%;
`;
const Text = styled.span`
  color: white;
`;
const Btn = styled.button`
  color: tomato;
  background-color: teal;
  border: 0;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const Input = styled.input.attrs({ disabled: true })``;

function App() {
  return (
    <Father>
      <Box bgColor="mistyrose" />
      <Circle bgColor="lightskyblue" />
      <Btn as="a" href="#">
        Login
      </Btn>
      <Input />
    </Father>
  );
}

export default App;
