import styled from 'styled-components';

const StyledDiv = styled.div`
overflow: hidden;
`;

export function CollapseableSection({ children, isOpen }) {
  return (
    <StyledDiv style={isOpen ? { height: 'auto' } : { height: '0px' }}>
      {children}
    </StyledDiv>
  );
}