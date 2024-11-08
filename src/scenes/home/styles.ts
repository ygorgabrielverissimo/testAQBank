import styled from 'styled-components/native';
import colors from '../../themes/colors';
import spacings from '../../themes/spacings';
import size from '../../themes/spacings';
import Logotipo from '../../assets/svg/logotipo.svg';
import CircuitIcon from '../../assets/svg/race.svg';
import CalendarIcon from '../../assets/svg/calendar.svg';
import CarIcon from '../../assets/svg/image 2.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blackground.white};
`;
export const Header = styled.View`
  width: 100%;
  background-color: ${colors.primary.primary950};
  gap: ${size.spacing.xs};
`;

export const Top = styled.View`
  width: 100%;
  padding: ${spacings.spacing.md} ${spacings.spacing.md} 0px
    ${spacings.spacing.md};
  gap: ${size.spacing.mim};
`;

export const Down = styled.View`
  width: 100%;
  height: 62px;
  padding: ${spacings.spacing.lg};
  gap: ${spacings.spacing.mim};
  margin-Top: ${spacings.spacing.xxs};
  bottom: ${spacings.spacing.mim};

`;
export const ContentDown = styled.View`
width: 289px;
height: 22px;
flex-direction: row;
gap: ${spacings.spacing.xs};

`;

export const Logo = styled(Logotipo)`
  width: 37px;
  height: 28px;
`;



export const Calendar = styled(CalendarIcon)`
  width: 14px;
  height: 14px;
`;

export const Circuit = styled(CircuitIcon)`
  width: 14px;
  height: 14px;
`;

export const Car = styled(CarIcon)`
  width: 14px;
  height: 14px;
`;

export const Title = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${colors.primary.primary50};
`;

export const NextRace = styled.Text`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.05em;
  text-align: left;
  margin-top: ${spacings.spacing.xxs};
  color: ${colors.neutro.neutro400};
`;

export const ContendDate = styled.View`

  height: 50px;
  gap: ${spacings.spacing.xxs};
`;

export const Date = styled.Text`
  //styleName: Mobile/14px/Semi Bold;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: ${spacings.spacing.md};
  letter-spacing: -0.005em;
  text-align: left;
  color: ${colors.primary.primary50};
`;


export const Content = styled.View`
  width: 376px;
  padding: 0px ${spacings.spacing.md} 0px ${spacings.spacing.md};
  gap: ${spacings.spacing.sm};
  border-radius: ${spacings.spacing.mim};
`;
export const BodyContent = styled.View`
  width: 100%;
  height: 110px;
  border-radius: ${spacings.spacing.xs};
  flex-direction: row;
`;

export const ContentCircuit = styled.View`
  width: 140px;
  height: 105px;
  padding: ${spacings.spacing.xs} 0px 0px ${spacings.spacing.md};
`;
export const ContentInfoRace = styled.View`
  width: 198px;
  gap: ${spacings.spacing.sm};
`;

export const ContentBotton = styled.View`
width: 116px;
height: 22px;
padding: ${spacings.spacing.mim}  ${spacings.spacing.mim}  ${spacings.spacing.mim} ${spacings.spacing.mim};
border-radius: ${spacings.spacing.mim};
background: ${colors.neutro.neutro950};
align-items: center;
flex-direction: row;
`;

export const ContenTitleCalendar = styled.View`
height: 18px;
padding: 0px ${spacings.spacing.mim} 0px ${spacings.spacing.mim};
`;

export const TitleCalendar = styled.Text`
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.5px;
text-align: center;
color: ${colors.blackground.white};
`;

export const Body = styled.View`
width: 100%;
padding: ${spacings.spacing.md} ${spacings.spacing.md} ${spacings.spacing.md} ${spacings.spacing.md};
gap: ${spacings.spacing.mim};
`;
export const Footer = styled.View`
width: 100%;
padding: ${spacings.spacing.md} ${spacings.spacing.md} ${spacings.spacing.md} 0px;
gap: ${spacings.spacing.mim};
background-color: ${colors.primary.primary50}
`;

export const Label = styled.Text`
font-family: Inter;
font-size: 12px;
font-weight: 600;
line-height: 16px;
letter-spacing: -0.05em;
text-align: left;
color: ${colors.neutro.neutro500}
`;

export const ContentAjust = styled.View`
width: 100%;
flex-direction: row;
`;

export const ContentTitle = styled.View`
width: 172px;
padding: ${spacings.spacing.xs} 0px ${spacings.spacing.md} 0px;
`;

export const ContentHistory = styled.View`
width: 100%;
padding: 0px ${spacings.spacing.xs}  ${spacings.spacing.xs} ${spacings.spacing.md};
gap:  ${spacings.spacing.xs};
`;

export const ContentTitleHistory = styled.View`
width: 335px;
height: 56px;
padding: ${spacings.spacing.xxs} 0px ${spacings.spacing.xxs} 0px;
gap: ${spacings.spacing.xs}
`;

export const TitleHistory = styled.Text`
//styleName: Mobile/14px/Bold;
font-family: Inter;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.005em;
text-align: left;
color: ${colors.primary.primary950}
`;


















