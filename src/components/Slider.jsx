import React from "react";
import CardSlider from "./CardSlider";
import styled from "styled-components";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    let moviesArr = [...movies];
    return moviesArr?.slice(from, to);
  };

  return (
    <Container className="container">
      <CardSlider
        className="card"
        title="Trending now"
        data={getMoviesFromRange(0, 10)}
      />
      <CardSlider
        className="card"
        title="Blockbuster movies"
        data={getMoviesFromRange(10, 20)}
      />
      <CardSlider
        className="card"
        title="New release"
        data={getMoviesFromRange(20, 30)}
      />
      <CardSlider
        className="card"
        title="Action and Thriller"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider
        className="card"
        title="Top rated"
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider
        className="card"
        title="Top 10"
        data={getMoviesFromRange(50, 60)}
      />
    </Container>
  );
}

const Container = styled.div`
  gap: 4px;
  justify-content: space-around;
  .card {
    gap: 4rem;
  }
`;
