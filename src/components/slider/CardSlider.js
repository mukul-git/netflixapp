import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";

function CardSlider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    let moviesArr = [...movies];
    return moviesArr?.slice(from, to);
  };
  //   getMoviesFromRange(0, 9).map((item) => console.log(item));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {getMoviesFromRange(0, 9).map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </Slider>
      <Slider {...settings}>
        {getMoviesFromRange(10, 19).map((item, index) => (
          <div key={index} className="card">
            {/* Your card content goes here */}
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {getMoviesFromRange(20, 29).map((item, index) => (
          <div key={index} className="card">
            {/* Your card content goes here */}
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {getMoviesFromRange(30, 39).map((item, index) => (
          <div key={index} className="card">
            {/* Your card content goes here */}
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {getMoviesFromRange(40, 49).map((item, index) => (
          <div key={index} className="card">
            {/* Your card content goes here */}
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {getMoviesFromRange(50, 59).map((item, index) => (
          <div key={index} className="card">
            {/* Your card content goes here */}
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
