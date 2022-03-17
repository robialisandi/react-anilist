import React from 'react';
import PropTypes from 'prop-types';

import {
  CardLink,
  Wrapper,
  WrapperImg,
  Cover,
  WrapperTitle,
  Title
} from './cardElement.js';

export const Card = ({anime}) => {
  return (
    <CardLink to={`/anime/${anime.id}`}>
      <Wrapper>
        <WrapperImg>
          <Cover img={anime?.coverImage?.large} alt="cover" />
        </WrapperImg>
        <WrapperTitle>
          <Title>{anime?.title.romaji}</Title>
        </WrapperTitle>
      </Wrapper>
    </CardLink>
  );
}

Card.propTypes = {
  anime: PropTypes.object.isRequired
};
