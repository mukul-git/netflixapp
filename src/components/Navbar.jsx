import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Navbar() {
  const links = [
    { name: "Home", link: "/home" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My list", link: "/mylist" },
  ];
  return (
    <Container>
      <nav>
        <div>
          <div>
            <img alt="logo" src={logo} />
          </div>
          <ul>
            {links.map((elem) => (
              <Link to={elem.link}>{elem.name}</Link>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div``;
