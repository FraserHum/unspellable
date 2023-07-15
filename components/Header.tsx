/* eslint-disable react/prop-types */
import React, { useSyncExternalStore } from 'react';
import NextLink from 'next/link';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import DocLink from './DocLink';
import client from '../utils/prismicHelpers';

const StyledHeader = styled.header`
  background-color: #dbe5ce;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const StyledLink = styled(NextLink)`
  size: 1vw;
  flex: 0 1 auto;
  display: grid;
  place-content: center;
`;

const Image = styled.img`
  max-width: 10vw;
  max-height: 200px;
  min-width: 100px;
  min-height: 100px;
  flex: 1 1 auto;
  height: auto;
  align-self: center;
`;
const StyledHeading2 = styled.h2`
  text-align: center;
  color: #3b5d4e;
  font-family: 'Vidaloka', serif;
  font-size: clamp(1.6em, 3vw, 3em);
  font-weight: 900;
  line-height: 70px;
  margin: 0 auto;
`;

const StyledP = styled.p`
  color: #231f20;
  font-family: 'Vidaloka', serif;
  font-size: clamp(1.1em, 1.6vw, 1.5em);
  font-weight: 200;
  line-height: 25px;
  text-align: center;
  margin: 0 auto;
`;

const TitleTagDiv = styled.div`
  flex: 0 1 auto;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul`{"type":"add","fieldType":"Color"}
list-style-type: none;
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    justify-content: 'flex-start';
    list-style-type: none;
   margin: 0 auto;
   padding: 0;
   background-color: #dbe5ce;
`;

const StyledNav = styled.nav`
  width: 100%;
  background-color: grey;
`;

const Titlebar = styled.div`
  max-height: 200px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: space-evenly;
  max-width: 95vw;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
`;

const StyledMenuListItem = styled.li`
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'grey'};
  flex: 1 1 auto;
  text-align: center;
`;

export const getStaticProps = async () => {
  const menu = (await client.getSingle('menu')) || {};
  return {
    props: {
      menu,
    },
  };
};

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

function Header({ menu, pageData, theme }) {
  const subscribe = (callBack) => {
    window.addEventListener('resize', callBack);
    window.addEventListener('load', callBack);
    return () => {
      window.removeEventListener('resize', callBack);
      window.removeEventListener('load', callBack);
    };
  };

  const getSnapshot = () => window.innerWidth > 1000;
  const getServerSnapShot = () => false;

  const isSmallScreen = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapShot,
  );

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
        <TitleTagDiv>
          <StyledHeading2>{RichText.asText(pageData.title)}</StyledHeading2>
          <StyledP>{RichText.asText(pageData.tagline)}</StyledP>
        </TitleTagDiv>
        <StyledLink href="/">
          {isSmallScreen ? (
            <Image
              src={menu.data.logo.url}
              alt="Unspellable Podcast Logo"
              className="logo"
            />
          ) : null}
        </StyledLink>
      </Titlebar>
      <MenuLinks menu={menu} theme={theme} />
    </StyledHeader>
  );
}

export default Header;
