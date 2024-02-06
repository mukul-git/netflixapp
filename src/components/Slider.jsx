import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    let moviesArr = [...movies];
    console.log(moviesArr);
    return moviesArr?.splice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending now" data={getMoviesFromRange(0, 10)} />
      <CardSlider
        title="Blockbuster movies"
        data={getMoviesFromRange(10, 20)}
      />
      <CardSlider title="New release" data={getMoviesFromRange(20, 30)} />
      <CardSlider
        title="Action and Thriller"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider title="Top rated" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Top 10" data={getMoviesFromRange(50, 60)} />
    </div>
  );
}
