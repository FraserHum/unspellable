import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 2em 0;
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    color: #f2f2f2;
    line-height: 1.75;
    text-align: center;
    width: 100%;
    height: 583px;
    ${({ imageURL }) => `
      background: linear-gradient(#F2F2F2, 20%,  transparent), url(${imageURL});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
    `};
`

const Banner = ({ banner }) => (
    <StyledSection imageURL={banner.image.url}></StyledSection>
)

export default Banner
