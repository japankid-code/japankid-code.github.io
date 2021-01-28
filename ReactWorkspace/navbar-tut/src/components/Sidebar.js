import React, { Component } from 'react';
import styled from "styled-components";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

const NavIcon = styled.div `

`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class SideNav extends React.Component {
    render() {
      return(
        <StyledSideNav></StyledSideNav>
      )
    }
}

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return(
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    )
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}