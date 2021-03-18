import styled from 'styled-components'
const StyledDiv = styled.div`
  maxWidth: 1280;
  padding: 0 25vw;
  margin: 0 auto;
  width: 100%;
  background-color: #C1DBE3; 
  display: flex;
`

export const Container = (props) => <StyledDiv>
    { props.children }
</StyledDiv> 