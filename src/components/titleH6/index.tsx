import React from 'react';
import {Title} from './styles';

type props = {
  title: string;
  color: string;
  fontWeight: number
};

const TitleH6 = ({title, color, fontWeight}: props) => {
  return <Title color={color} fontWeight={fontWeight}>{title}</Title>;
};

export default TitleH6;
