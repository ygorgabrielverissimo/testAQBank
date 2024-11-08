import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {listPilots} from '../../services/pilots';
import {Pilot} from '../../utils/types/pilot';

import Italian from '../../assets/svg/iconsNationality/italy.svg';
import Belgium from '../../assets/svg/iconsNationality/belgium.svg';
import France from '../../assets/svg/iconsNationality/france.svg';
import Germany from '../../assets/svg/iconsNationality/germany.svg';
import NewZeland from '../../assets/svg/iconsNationality/new zealand.svg';
import Spain from '../../assets/svg/iconsNationality/spain.svg';
import Sweden from '../../assets/svg/iconsNationality/sweden.svg';
import UnitedKingdom from '../../assets/svg/iconsNationality/united kingdom.svg';
import UnitedStates from '../../assets/svg/iconsNationality/united states.svg';
import Thailand from '../../assets/svg/iconsNationality/thailand.svg';

import {format} from 'date-fns';

import {
  Body,
  CardPilot,
  Container,
  Content,
  ContentTitle,
  ContetCard,
  Label,
  SubTitle,
  SubTitleCard,
  Title,
  TitleCard,
} from './styles';
import {ptBR} from 'date-fns/locale';
import Load from '../../components/load';

const History = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<Pilot[]>();
  useEffect(() => {
    getPilots();
  }, []);

  const getPilots = async () => {
    setLoad(true);
    const res = await listPilots();
    const dataFilterdateOfBirth = res.filter(p => p.dateOfBirth > '1960-01-1');
    dataFilterdateOfBirth.forEach(
      x => (x.dateOfBirth = dateFormat(x.dateOfBirth)),
    );
    setData(dataFilterdateOfBirth);
    setLoad(false);
    return res;
  };

  const dateFormat = (date: string) => {
    var formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", {locale: ptBR});
    return formattedDate.replace(/de (.*?) de/, (match, mes) => {
      return `de ${mes.charAt(0).toUpperCase()}${mes
        .slice(1)
        .toLowerCase()} de`;
    });
  };

  const selectIcon = async (nationality: string) => {
    switch (nationality) {
      case 'Italian':
        return <Italian />;
      case 'Belgian':
        return <Belgium />;
      case 'British':
        return <Italian />;
      case 'Dutch':
        return <UnitedKingdom />;
      case 'Thai':
        return <Thailand />;
      case 'French':
        return <France />;
      case 'Germany':
        return <Germany />;
      case 'Spain':
        return <Spain />;
      case 'NewZeland':
        return <NewZeland />;
      case 'Sweden':
        return <Sweden />;
      case 'Spanish':
        return <Spain />;
      case 'American':
        return <UnitedStates />;
    }
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} />;
      <Container>
        <Content>
          <Title>{'História da formula 1 '}</Title>
          <SubTitle>
            {
              'Conheça os nomes que fizeram história, desde os pioneiros até os campeões inesquecíveis.'
            }
          </SubTitle>
        </Content>
        <Body>
          <Label>Pilotos</Label>
          <FlatList
            data={data}
            contentContainerStyle={{paddingBottom: '50%'}}
            keyExtractor={item => item.driverId}
            renderItem={({item}) => (
              <ContetCard>
                {load ? (
                  <Load />
                ) : (
                  <CardPilot>
                    {selectIcon(item.nationality)}
                    <ContentTitle>
                      <TitleCard>{item.givenName}</TitleCard>
                      <SubTitleCard>Nascido em {item.dateOfBirth}</SubTitleCard>
                    </ContentTitle>
                  </CardPilot>
                )}
              </ContetCard>
            )}
          />
        </Body>
      </Container>
    </>
  );
};
export default History;
