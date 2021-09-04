import styled from 'styled-components'
const StyledDiv = styled.div`
    maxwidth: 1280;
    padding: 0 25vw;
    margin: 0 auto;
    width: 100%;
    background-color: #a6dbbc;
    display: flex;
`

export const Container = (props) => <StyledDiv>{props.children}</StyledDiv>
