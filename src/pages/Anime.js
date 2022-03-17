import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIME_BY_ID } from "../grapql/queries";
import styled from 'styled-components';
import parse from 'html-react-parser';
import Loading from '../components/loading'

const Anime = () => {
  let { id } = useParams();
  const { error, loading, data } = useQuery(GET_ANIME_BY_ID, { variables: { id: Number(id) }});
  const [anime, setAnime] = useState({});
  
  useEffect(() => {
    if (data) setAnime(data.Media)
  }, [data])

  if (loading) return <Loading/>;  
  if (error) return <p>Error {error}</p>;

  return (
    <Container>
      <Banner img={anime?.bannerImage} alt="cover" />
      <Wrapper>
        <Header>
          <Title>{anime?.title?.romaji}</Title>
          <SubTitle>Popular {anime?.popularity} | favourites {anime?.favourites}</SubTitle>
        </Header>
        <BoxWrapper>
          <Description>{parse(`${anime?.description}`)}</Description>
        </BoxWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 321px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
`;

const Header = styled.div`
  justify-content: space-between;
  display: flex;
`;

const Title = styled.span`
  z-index: 2;
  padding: 10px;
  background: #ffffffab;
  font-weight: bold;
`
const SubTitle = styled.span`
  z-index: 2;
  padding: 10px;
  background: #000000ab;
  color: #5add65;
  font-size: 12px;
`

const Wrapper = styled.div`
  padding: 10px 35px;
  position: relative;
  z-index: 2;
  max-width: 1012px;
  margin: 0 auto;
  margin-top: 150px;
`;

const BoxWrapper = styled.div`
  padding: 10px 35px;
  position: relative;
  z-index: 2;
  max-width: 1012px;
  margin: 0 auto;
  background: #fff;
  margin-top: 25px;
`;

const Description = styled.p`
  font-size: 13px;
  font-family: 'Fredoka', sans-serif;;
`;

export default Anime;