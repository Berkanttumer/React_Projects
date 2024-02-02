import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Axios } from 'axios';

const MovieDetails = () => {
  let { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  const API_KEY = '3e2ad5311da9fce573c7f1bfb30b2d81';

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="details-page mt-[50px] mb-[200px] max-h-[700px] ">
        <div className="movie-bg ">{movie.backdrop_path}</div>
        <div className="movie-background container gap-14 relative flex flex-row">
          <div className="movie-title left-col ">
            <div className="top-title">
              <div>{movie.title}</div>
              <p>{movie.overview}</p>
            </div>
            <div className="top-rank items-center flex mt-5 "></div>
            <div className="casts mt-8">
              <div className="cast-title">
                <h2 className="text-2xl">The cast</h2>
              </div>
              <div className="cast-row mt-5">
                <div className="actors flex flex-row gap-5 flex-wrap"></div>
              </div>
            </div>
          </div>
          <div className="right-col w-[1300px]  ">
            <div className="infos">
              <div className="trailer relative w-[270px]">
                <div className="play-button mb-5">
                  <a href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="about mt-8">
              <ul className="about-ul flex flex-col mt-12"></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rec">
        <div className="rec-container container">
          <div className="title text-2xl mb-8">
            <h2>You may also like</h2>
          </div>
          <div className="rec-wrap"></div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
