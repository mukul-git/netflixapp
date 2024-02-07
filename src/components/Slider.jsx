import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    let moviesArr = [...movies];
    return moviesArr?.splice(from, to);
  };
  // console.log(getMoviesFromRange(0, 10));
  // console.log(getMoviesFromRange(10, 10));

  return (
    <div>
      <CardSlider title="Trending now" data={getMoviesFromRange(0, 10)} />
      <CardSlider
        title="Blockbuster movies"
        data={getMoviesFromRange(10, 10)}
      />
      <CardSlider title="New release" data={getMoviesFromRange(20, 10)} />
      <CardSlider
        title="Action and Thriller"
        data={getMoviesFromRange(30, 10)}
      />
      <CardSlider title="Top rated" data={getMoviesFromRange(40, 10)} />
      <CardSlider title="Top 10" data={getMoviesFromRange(50, 10)} />
    </div>
  );
}
