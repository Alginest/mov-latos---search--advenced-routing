import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
const SinglePage = () => {
  const classes = useStyles();
  let { id, media_type } = useParams();
  const [contDetail, setcontDetail] = useState([]);
  console.log(media_type);
  const fetchData = async () => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    setcontDetail(data);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);
  return (
    <section className={classes.search}>
      <Header />
      <h1>{contDetail.title || contDetail.name}</h1>
    </section>
  );
};

export default SinglePage;
