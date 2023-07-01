import styled from 'styled-components';

const StyledDiv = styled.div`
overflow: hidden;
`

export const CollapseableSection = ({children, isOpen}) => (
    <StyledDiv style={isOpen ? {height : "auto" }:{height : "0px" }} >
        {children}
    </StyledDiv>
    )