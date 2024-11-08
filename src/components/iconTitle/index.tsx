import React from 'react';
import {
  ContenTitleBotton,
  InformationButton,
  Lead,
  TitleButton,
} from './styles';

type props = {
  title: string;
  color: string;
  size: number;

};

const IconTitle = ({title, color, size}: props) => {
  return (
    <InformationButton color={color} size={size}>
      <Lead />
      <ContenTitleBotton>
        <TitleButton>{title}</TitleButton>
      </ContenTitleBotton>
    </InformationButton>
  );
};

export default IconTitle;
