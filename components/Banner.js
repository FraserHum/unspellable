import React from "react";
import { RichText } from "prismic-reactjs";

import { DocLink } from "components";
import { BannerStyles } from "styles";
import styled from 'styled-components';

const StyledSection = styled.section`
    margin: -70px 0 0px;
    padding: 2em 0;
    background-position: center top;
    background-size: cover;
    color: #ffffff;
    line-height: 1.75;
    text-align: center;
    height: 50vh;

    ${({ imageURL }) => `
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${imageURL});
    `}
`

const StyledHeading2 = styled.h2`
color: #ffffff;
font-size: 70px;
font-weight: 900;
line-height: 70px;
`

const StyledP = styled.p`
color: #ffffff;
font-size: 25px;
font-weight: 200;
line-height: 25px;

`

const Banner = ({ banner }) => {
  return (
  <StyledSection imageURL={banner.image.url}>
    <div>
      <StyledHeading2 >{RichText.asText(banner.title)}</StyledHeading2>
      <StyledP >{RichText.asText(banner.tagline)}</StyledP>
      <DocLink link={banner.button_link} >
        {RichText.asText(banner.button_label)}
      </DocLink>
    </div>
  </StyledSection>
);
  }
export default Banner;
