import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ANIMES } from "../grapql/queries";
import { Card, SearchForm } from "../components";
import styled from 'styled-components';
import { pageMargins } from "../utils/style";
import Search from '../pages/Search'
import Loading from '../components/loading'

const Home = () => {
  const { error, loading, data } = useQuery(LOAD_ANIMES, { variables: { sort: "TRENDING_DESC" }});
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (data) setAnimes(data.Page.media)
    if (!searchTerm) setIsSubmitted(false) 
  }, [data, searchTerm])

  const handleInputChange = (val) => {
    setSearchTerm(val);
  }

  const handleFormSubmit = () => {
    console.log('searc', searchTerm);
    setIsSubmitted(true);
  }
  
  if (loading) return <Loading/>;
  if (error) return <p>Error</p>;

  return (
    <Container>
      <Wrapper>
        <SearchForm
          value={ searchTerm }
          handleInputChange={ handleInputChange }
          handleFormSubmit={ handleFormSubmit }
        />
        {isSubmitted ?
          <Search keyword={searchTerm}/>
        :
        <GridAnimes>
        {animes.map((media, i) => {
          return (
            <Card key={i} anime={media}/>
          )
        })}
        </GridAnimes>
        }
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: #f5f5f5;
  box-shadow: 0px -14px 36px rgba(0, 0, 0, 0.09);
  z-index: 10;
`
export const Wrapper = styled.div`
  ${pageMargins}
`;


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

export default Home;