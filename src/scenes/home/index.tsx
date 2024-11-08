import React from 'react';
import {
  Container,
  Top,
  Down,
  Logo,
  Circuit,
  Header,
  Title,
  NextRace,
  ContendDate,
  Content,
  ContentCircuit,
  ContentInfoRace,
  ContentDown,
  ContentBotton,
  Calendar,
  ContenTitleCalendar,
  TitleCalendar,
  BodyContent,
  Body,
  Footer,
  Label,
  Car,
  ContentTitle,
  ContentAjust,
  ContentHistory,
  ContentTitleHistory,
  TitleHistory,
} from './styles';
import BottonDate from '../../components/bottonDate';
import TitleDate from '../../components/titleDate';
import colors from '../../themes/colors';
import TitleH6 from '../../components/titleH6';
import IconTitle from '../../components/iconTitle';
import ListPilot from '../../components/listPilots';
import Botton from '../../components/bottom';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 0, backgroundColor: `${colors.primary.primary950}`}}
      />
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, backgroundColor: `${colors.primary.primary50}`}}>
        <StatusBar barStyle={'light-content'} />
        <Container>
          <Header>
            <Top>
              <Logo />
              <Title>Olá, Ana Paula</Title>
            </Top>
            <Content>
              <BodyContent>
                <ContentInfoRace>
                  <NextRace>Próxima corrida</NextRace>
                  <TitleH6
                    title={'GP do Bahrein'}
                    color={colors.blackground.white}
                    fontWeight={700}
                  />
                  <ContendDate>
                    <TitleDate
                      title={'Data Sáb., 2 de Mar., 12:00'}
                      color={colors.primary.primary50}
                      fontWeight={600}
                    />
                    <IconTitle
                      title={'Circuito internacional do Bahrein'}
                      color={colors.primary.main}
                      size={230}
                    />
                  </ContendDate>
                </ContentInfoRace>
                <ContentCircuit>
                  <Circuit />
                </ContentCircuit>
              </BodyContent>
            </Content>
            <Down>
              <ContentDown>
                <ContentBotton>
                  <Calendar />
                  <ContenTitleCalendar>
                    <TitleCalendar>Próximos dias</TitleCalendar>
                  </ContenTitleCalendar>
                </ContentBotton>
                <BottonDate title={'Dia 09, 14:00'} />
                <BottonDate title={'Dia 24, 14:00'} />
              </ContentDown>
            </Down>
          </Header>
          <Body>
            <Label>Última corrida</Label>
            <ContentAjust>
              <ContentTitle>
                <TitleH6
                  title={'GP de Abu Dhabi'}
                  color={colors.neutro.neutro950}
                  fontWeight={700}
                />
              </ContentTitle>
              <Car />
            </ContentAjust>
            <ContendDate>
              <TitleDate
                title={'Data Sáb., 2 de Jan., De 2023 12:00'}
                color={colors.neutro.neutro700}
                fontWeight={700}
              />
              <IconTitle
                title={'Circuito Yas Marina Circuit'}
                color={colors.neutro.neutro200}
                size={200}
              />
            </ContendDate>
            <ListPilot />
          </Body>
          <Footer>
            <ContentHistory>
              <Label>História</Label>
              <ContentTitleHistory>
                <TitleHistory>
                  {
                    'Conheça os pilotos de formula 1 que fizeram história em 1960 '
                  }
                </TitleHistory>
              </ContentTitleHistory>
              <Botton
                title={'Ver Pilotos'}
                onPress={() => {
                  navigation.navigate('História');
                }}
              />
            </ContentHistory>
          </Footer>
        </Container>
      </SafeAreaView>
    </>
  );
};
export default Home;
