import styled from 'styled-components';
import { Link } from "react-router-dom";
import { color } from '../../utils/style';

export const Cover = styled.div`
height: 100%;
left: 0;
object-fit: cover;
top: 0;
transition: opacity .3s ease-in-out;
width: 100%;
position: absolute;
background-image: ${(props) => `url(${props.img})`};
background-size: cover;
border-radius: 5px;
`;

export const Wrapper = styled.div`
width: 100%;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export const WrapperImg = styled.div`
height: 265px;
width: 100%;
position: relative;
margin-bottom: 5px;
&:hover,
&:focus {
  cursor: pointer;
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(90,221,101,.2),0 4px 4px rgba(90,221,101,.05);
}
&.active {
  border-bottom: 1px solid ${color.primary};
}
`;

export const WrapperTitle = styled.div`
margin: 0 5px 5px 10px;
`;

export const Title = styled.span`
padding: 5px;
-webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
height: 3em;
${WrapperImg}:hover & {
  color: ${color.primary};
}
`;

export const CardLink = styled(Link)`
color: ${color.darkFont} !important;
display: flex;
align-items: center;
text-decoration: none !important;
height: 100%;
cursor: pointer;
font-weight: 600;
font-size: 12px;
line-height: 15px;
`;