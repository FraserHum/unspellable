/* eslint-disable react/prop-types */
import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #B7CB9C;
`

const StyledLink = styled(NextLink)`
    size: 1vw;
    flex: 1 1 auto;
`

const Image = styled.img`
    width: 10vw;
    flex: 1 1 auto;
`
const StyledHeading2 = styled.h2`
    text-align:center;
    color: #3B5D4E;
    font-family: 'Vidaloka', serif;
    font-size: 60px;
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
    text-align:center;
    margin: 0 auto;
`

const StyledDiv = styled.div`
    flex: 1 1 auto;
`

const StyledA = styled.a`
    width:100%;
    flex-basis: fit-content;
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-evenly;
    list-style-type: none;
    margin: 0 auto;
`

const StyledNav = styled.nav`
    flex: 1 1 auto;
    width: 100vw;
`

const Titlebar = styled.div`
    display: flex;
`

const StyledMenuListItem = styled.li`
    color: ${props => props.textColor ? props.textColor : "white"};
    background: ${props => props.backgroundColor ? props.backgroundColor : "grey"};
    flex: 1 1 auto;
    text-align:center;
`

const Header = ({ menu, pageData }) => {
    console.log(pageData)
    return (
        <StyledHeader className="site-header">
            <Titlebar>
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
                <StyledHeading2>
                    {RichText.asText(pageData.title)}
                </StyledHeading2>
                <StyledP>{RichText.asText(pageData.tagline)}</StyledP>
            </StyledDiv>
            <StyledLink href="/">
                <StyledA>
                    <Image
                        src={menu.data.logo.url}
                        alt="Unspellable Podcast Logo"
                        className="logo"
                    />
                </StyledA>
            </StyledLink>
            </Titlebar>
            <MenuLinks menu={menu} />
        </StyledHeader>
    )
}

const MenuLinks = ({ menu }) => {
    if (menu) {
        return (
            <StyledNav>
                <StyledList>
                    {menu.data.menu_links.map((menuLink) => (
                        <MenuLink
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

const MenuLink = ({ menuLink }) => {
    return (
    <StyledMenuListItem backgroundColor={menuLink.backgroundcolor} textColor={menuLink.textcolor}>
        <DocLink link={menuLink.link}>
            {RichText.asText(menuLink.label)}
        </DocLink>
    </StyledMenuListItem>
    )
}



export default Header
