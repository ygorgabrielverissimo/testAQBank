import styled from 'styled-components/native';
import spacings from '../../themes/spacings';
import colors from '../../themes/colors';


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blackground.white};
`;

export const Content = styled.View`
  width: 375px;
  height: 146px;
  padding: ${spacings.spacing.md};
  gap: ${spacings.spacing.xxs};
`;

export const Title = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${colors.neutro.neutro800};
`;

export const SubTitle = styled.Text`
  //styleName: Mobile/16px/Semi Bold;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.05em;
  text-align: left;
  color: ${colors.neutro.neutro500};
`;

export const Body = styled.View`
  width: 100%;
  padding: ${spacings.spacing.xs} ${spacings.spacing.md} ${spacings.spacing.xl}
    ${spacings.spacing.md};
  gap: ${spacings.spacing.xs};
`;

export const Label = styled.Text`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.05em;
  text-align: left;
  color: ${colors.neutro.neutro500};
`;
export const ContetCard = styled.View`
  margin-bottom: ${spacings.spacing.xs};
`;

export const CardPilot = styled.View`
  width: 100%;
  height: 68px;
  padding: ${spacings.spacing.xs};
  gap: ${spacings.spacing.xs};
  border-radius: ${spacings.spacing.xs};
  border: 1px;
  border-color: ${colors.neutro.neutro300};
  flex-direction: row;
  align-items: center;
`;

export const ContentTitle = styled.View`
 width: 100%;
 height: fit;


`;

export const TitleCard = styled.Text`
//styleName: Mobile/16px/Bold;
font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.005em;
text-align: left;
`;

export const SubTitleCard = styled.Text`
//styleName: Mobile/14px/Medium;
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.005em;
text-align: left;
color: ${colors.neutro.neutro500};
`;



