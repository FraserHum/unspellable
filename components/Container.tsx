import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 1280px;
  padding: 0 25vw;
  margin: 0 auto;
  width: 100%;
  background-color: #a6dbbc;
  display: grid;
  place-content: center;
`;

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
