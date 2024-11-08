import React from 'react';
import {ContentBotton, ContentTitle, Title} from './styles';

type props = {
  title: string;
};

const BottonDate = ({title}: props) => {
  return (
    <ContentBotton>
      <ContentTitle>
        <Title>{title}</Title>
      </ContentTitle>
    </ContentBotton>
  );
};

export default BottonDate;
