import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_ANIMES } from "../grapql/queries";
import { Card } from "../components";
import styled from 'styled-components';
import Loading from '../components/loading'

const Search = ({keyword}) => {
  const { error, loading, data } = useQuery(SEARCH_ANIMES, { variables: { title: keyword }});
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    if (data) setAnimes(data.Page.media)
  }, [data])

  
  if (loading) return <Loading/>;
  if (error) return <p>Error</p>;

  return (
    <>
        <GridAnimes>
        {animes.map((media, i) => {
          return (
            <Card key={i} anime={media}/>
          )
        })}
        </GridAnimes>
    </>
  )
}

export const GridAnimes = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 208px);
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Search;