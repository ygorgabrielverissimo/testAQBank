import React from 'react';
import {Arrow, ContentBotton, Title} from './styles';

type props = {
  title: string;
  onPress: () => void
};

const BottonP = ({title, onPress}: props) => {
  return (
    <ContentBotton onPress={onPress}>
      <Title>{title}</Title>
      <Arrow />
    </ContentBotton>
  );
};

export default BottonP;
