import styled from 'styled-components'
const StyledDiv = styled.div`
    padding: 0 5vw;
    margin: -20vw auto 0 auto;
    width: 80%;
    min-width: 400px;
    background-color: #a6dbbc;
    position: relative;
    align-self: end;
`

export const Container = (props) => <StyledDiv>{props.children}</StyledDiv>
