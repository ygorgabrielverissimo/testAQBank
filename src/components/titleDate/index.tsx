import React from 'react';
import {Date} from './styles';

type props = {
  title: string;
  color: string;
  fontWeight: number
};

const TitleDate = ({title, color, fontWeight}: props) => {
  return <Date color={color} fontWeight={fontWeight}>{title}</Date>;
};

export default TitleDate;
