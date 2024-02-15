import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import image from '../../assets/no-image.jpg';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const ShowDetails = () => {
  let { id } = useParams();

  const [show, setShow] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [trailerResult, setTrailerResult] = useState([]);
  const [recShow, setRecShow] = useState([]);
  const noImage = image;

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setShow(data);
    console.log(data);
  };

  const trailerShow = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setTrailer(data);

    const results = data.results.find((video) => video.type === 'Trailer');
    setTrailerResult(results);
    console.log(trailerResult);
  };

  const castingShow = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setCasts(data);
    console.log(data);
  };

  const firstTenActor = casts.cast?.slice(0, 10);

  const recomShow = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = res.data;
    setRecShow(data);

    console.log(data);
  };

  useEffect(() => {
    fetchData(), recomShow(), trailerShow(), castingShow();

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <section className="details-page mt-[50px] mb-[200px] max-h-[700px] ">
        <div className="movie-bg ">
          {
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.name}
            />
          }
        </div>
        <div className="show-background container gap-14 relative flex flex-row">
          <div className="show-title left-col ">
            <div className="top-title">
              <div className="mb-5 mt-10 text-3xl font-bold text-center">
                {show.name?.toUpperCase()}
              </div>
              <p>{show.overview}</p>
            </div>
            <div className="top-rank items-center flex mt-5 ">
              <div className="flex gap-5 items-center justify-center">
                <i className="fas fa-star text-[#dc1a28]"></i>
                <p className="text-xl">{show.vote_average?.toFixed(1)} / 10</p>
              </div>
            </div>
            <div className="casts mt-8">
              <div className="cast-title">
                <h2 className="text-2xl">The cast</h2>
              </div>
              <div className="cast-row mt-5">
                <div className="actors flex flex-row gap-5 flex-wrap">
                  {firstTenActor?.map((cast) => (
                    <div className="actor" key={cast.id}>
                      <a href="" className="actor-img">
                        {cast.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name}
                          />
                        ) : (
                          <img src={noImage} alt={cast.name} />
                        )}
                        <div className="actor-name mt-4">{cast.name}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right-col w-[1300px]  ">
            <div className="infos">
              <div className="trailer relative w-[270px]">
                <a
                  href={`https://www.youtube.com/watch?v=${trailerResult?.key}`}
                >
                  <img
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/original${show.poster_path}`
                        : 'img/no-image.jpg'
                    }
                    alt="show Poster"
                    className="img"
                  />
                </a>
                <div className="play-button mb-5">
                  <a
                    href={`https://www.youtube.com/watch?v=${trailerResult?.key}`}
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="about mt-8">
              <ul className="about-ul flex flex-col mt-12">
                <li>
                  <span className="font-bold">Last Air Date</span>
                  <a href="#">{show.last_air_date}</a>
                </li>
                <li>
                  <span className="font-bold">Length</span>
                  <a href="#">
                    {show.episode_run_time ? show.episode_run_time[0] : ''}{' '}
                    Minutes
                  </a>
                </li>
                <li>
                  <span className="font-bold">Genre</span>
                  <div>
                    {show.genres?.map((genre, index) => (
                      <span key={index}>
                        {index > 0 && ' , '}
                        <a href="#">{genre.name}</a>
                      </span>
                    ))}
                  </div>
                </li>
                <li>
                  <span className="font-bold">Seasons</span>
                  <a href="#">
                    <span>{show.number_of_seasons}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rec">
        <div className="rec-container container">
          <div className="title text-2xl mb-8">
            <h2>You may also like</h2>
          </div>
          <div className="rec-wrap">
            {recShow.results?.map((show) => {
              return (
                <div key={show.id}>
                  <Link to={`/showDetails/${show.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                      alt={show.title}
                    />
                    <div className="rec-title">{show.title}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowDetails;
