/* eslint-disable react/prop-types */
import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import DocLink from './DocLink'

const StyledHeader = styled.header`
    --min: 10ch;
    --gap: 1rem;
    background-color: #231f20cc;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap);
    grid-area: 1 / 1;
    max-height: 70px;

    > * {
        flex: 1 1 var(--min);
    }
`

const StyledLink = styled(NextLink)`
    size: 1vw;
`

const Image = styled.img`
    width: 7vw;
    min-width: 70px;
`
const StyledHeading2 = styled.h2`
    color: #f2f2f2;
    font-family: 'Vidaloka', serif;
    font-size: 4vw;
    font-weight: 900;
    line-height: 70px;
    margin: 0 auto;
`

const StyledP = styled.p`
    color: #231f20;
    font-family: 'Vidaloka', serif;
    font-size: 25px;
    font-weight: 200;
    line-height: 25px;
`

const StyledDiv = styled.div`
    flex: 1 1 auto;
`

const StyledA = styled.a`
    flex: 0 1 auto;
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-evenly;
    list-style-type: none;
`

const StyledNav = styled.nav`
    flex: 1 1 auto;
`

const Header = ({ menu, pageData }) => (
    <StyledHeader className="site-header">
        <StyledLink href="/">
            <StyledA>
                <Image
                    src={menu.data.logo.url}
                    alt="Unspellable Podcast Logo"
                    className="logo"
                />
            </StyledA>
        </StyledLink>
        <StyledDiv>
            <StyledHeading2>{RichText.asText(pageData.title)}</StyledHeading2>
            <StyledP>{RichText.asText(pageData.tagline)}</StyledP>
        </StyledDiv>
        <MenuLinks menu={menu} />
    </StyledHeader>
)

const MenuLinks = ({ menu }) => {
    if (menu) {
        return (
            <StyledNav>
                <StyledList>
                    {menu.data.menu_links.map((menuLink) => (
                        <StyledMenuLink
                            menuLink={menuLink}
                            key={`menulink-${menuLink.link.id}`}
                        />
                    ))}
                </StyledList>
            </StyledNav>
        )
    }
    return null
}

const MenuLink = ({ menuLink }) => (
    <li>
        <DocLink link={menuLink.link}>
            {RichText.asText(menuLink.label)}
        </DocLink>
    </li>
)

const StyledMenuLink = styled(MenuLink)`
    color: #afd69b;
    flex: 1 1 auto;
`

export default Header
