import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function CardSlider({ data, title }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      {data.map((movies, index) => {
        return (
          <Card data={movies} key={index}>
            <div className="wrapper">
              <div className="slider">{movies.name}</div>
              <div className="slider-action"></div>
              <div className="none"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
