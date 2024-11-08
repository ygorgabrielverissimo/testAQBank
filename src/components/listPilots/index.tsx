import React from 'react';
import {
  ContenTitleBotton,
  ContentNamePilots,
  ContentPilots,
  InformationPilot,
  Gold,
  NamePilot,
  Silver,
  Bronze,
  NameMark,
} from './styles';

const ListPilot = () => {
  return (
    <ContentPilots>
      <ContentNamePilots>
        <InformationPilot>
          <Gold />
          <ContenTitleBotton>
            <NamePilot>{'1º  Max Verstappen'}</NamePilot>
            <NameMark>{'  Red Bull'}</NameMark>
          </ContenTitleBotton>
        </InformationPilot>
      </ContentNamePilots>
      <ContentNamePilots>
        <InformationPilot>
          <Silver />
          <ContenTitleBotton>
            <NamePilot>{'2º  Charles leclerc'}</NamePilot>
            <NameMark>{'  Ferrari'}</NameMark>
          </ContenTitleBotton>
        </InformationPilot>
      </ContentNamePilots>
      <ContentNamePilots>
        <InformationPilot>
          <Bronze />
          <ContenTitleBotton>
            <NamePilot>{'3º  Lewis Hamilton'}</NamePilot>
            <NameMark>{'  Mercedes'}</NameMark>
          </ContenTitleBotton>
        </InformationPilot>
      </ContentNamePilots>
    </ContentPilots>
  );
};

export default ListPilot;
