import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../assets/no-image.jpg';
import { Axios } from 'axios';

const MovieDetails = () => {
  let { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const noImage = image;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setMovie(data);
    console.log(data);
  };

  const castingMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setCasts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData(), castingMovie();
  }, []);

  return (
    <>
      <section className="details-page mt-[50px] mb-[200px] max-h-[700px] ">
        <div className="movie-bg ">
          {
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          }
        </div>
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
                <div className="actors flex flex-row gap-5 flex-wrap">
                  {casts.cast?.map((cast) => (
                    <div className="actor" key={cast.id}>
                      <div className="actor-img">
                        {cast.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name}
                          />
                        ) : (
                          <img src={noImage} alt={cast.name} />
                        )}
                      </div>
                      <div className="actor-name">{cast.name}</div>
                    </div>
                  ))}
                </div>
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
