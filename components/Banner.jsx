import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import DocLink from './DocLink'
import { BannerStyles } from '../styles'

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0 auto;
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    color: #f2f2f2;
    text-align: center;
    width: 100%;
    height: auto;
`
// ${({ imageURL }) => `
//   background: linear-gradient(#F2F2F2, 20%,  transparent), url(${imageURL});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center top;
// `};

const Banner = ({ banner }) => (
    <StyledSection imageURL={banner.image.url}>
        <img src={banner.image.url} alt={banner.image.alt} />
    </StyledSection>
)

export default Banner
