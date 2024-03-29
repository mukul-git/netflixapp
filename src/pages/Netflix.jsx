import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import BackgroundImage from "../assets/home.jpg";
// import Slider from "../components/Slider";
import logo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getgenres, fetchMovies } from "../store/slice/moviesSlice";
import { fetchAllTrending } from "../store/slice/allTypeSlice";

import CardSlider from "../components/slider/CardSlider";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresData = useSelector((state) => state.netflix.genres);
  const movies = useSelector((state) => state.netflix.movies);
  const genresLoading = useSelector((state) => state.netflix.genresLoading);
  const allTtype = useSelector((state) => state.allType.allTrending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getgenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoading) dispatch(fetchMovies({ genresData, type: "all" }));
  }, [dispatch, genresData, genresLoading]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={BackgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex a-center j-center"
              onClick={() => navigate("/player")}
            >
              {FaPlay} Play
            </button>
            <button className="flex a-center j-center">
              {AiOutlineInfoCircle} More info
            </button>
          </div>
        </div>
      </div>
      <CardSlider movies={movies} />
      <div style={{ height: "400px" }}></div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
