/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import DocLink from './DocLink';

const StyledHeader = styled.header`
  background-color: #dbe5ce;
`;

const StyledLink = styled(NextLink)`
  size: 1vw;
  flex: 1 1 auto;
`;

const Image = styled.img`
  width: 10vw;
  flex: 1 1 auto;
`;
const StyledHeading2 = styled.h2`
  text-align: center;
  color: #3b5d4e;
  font-family: 'Vidaloka', serif;
  font-size: 60px;
  font-weight: 900;
  line-height: 70px;
  margin: 0 auto;
`;

const StyledP = styled.p`
  color: #231f20;
  font-family: 'Vidaloka', serif;
  font-size: 25px;
  font-weight: 200;
  line-height: 25px;
  text-align: center;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  flex: 1 1 auto;
`;

const StyledA = styled.a`
  width: 100%;
  flex-basis: fit-content;
  cursor: pointer;
`;

const StyledList = styled.ul`{"type":"add","fieldType":"Color"}
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: 'space-evenly';
    list-style-type: none;
   margin: 0 auto;
   padding: 0;
`;

const StyledNav = styled.nav`
  flex: 1 1 auto;
  width: 100vw;
`;

const Titlebar = styled.div`
  display: flex;
`;

const StyledMenuListItem = styled.li`
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'grey')};
  flex: 1 1 auto;
  text-align: center;
`;

function Header({ menu, pageData, theme }) {
  return (
    <StyledHeader className="site-header">
      <Titlebar>
        <StyledLink href="/">
          <Image
            src={menu.data.logo.url}
            alt="Unspellable Podcast Logo"
            className="logo"
          />
        </StyledLink>
        <StyledDiv>
          <StyledHeading2>{RichText.asText(pageData.title)}</StyledHeading2>
          <StyledP>{RichText.asText(pageData.tagline)}</StyledP>
        </StyledDiv>
        <StyledLink href="/">
          <Image
            src={menu.data.logo.url}
            alt="Unspellable Podcast Logo"
            className="logo"
          />
        </StyledLink>
      </Titlebar>
      <MenuLinks menu={menu} theme={theme} />
    </StyledHeader>
  );
}

function MenuLinks({ menu, theme }) {
  if (menu) {
    return (
      <StyledNav>
        <StyledList>
          {menu.data.menu_links.map((menuLink) => (
            <MenuLink
              menuLink={menuLink}
              key={`menulink-${menuLink.link.id}`}
              theme={theme}
            />
          ))}
        </StyledList>
      </StyledNav>
    );
  }
  return null;
}

function MenuLink({ menuLink }) {
  return (
    <StyledMenuListItem
      backgroundColor={menuLink.backgroundcolor}
      textColor={menuLink.textcolor}
    >
      <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
    </StyledMenuListItem>
  );
}

export default Header;
