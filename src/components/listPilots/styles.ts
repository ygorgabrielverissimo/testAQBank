import styled from 'styled-components/native';
import spacings from '../../themes/spacings';
import colors from '../../themes/colors';
import GoldIcon from '../../assets/svg/gold.svg';
import SilverIcon from '../../assets/svg/silver.svg';
import BronzeIcon from '../../assets/svg/bronze.svg';

export const ContentNamePilots = styled.View`
  width: 290px;
  height: 20px;
  gap: ${spacings.spacing.xs};
  align-items: center;
  flex-direction: row;
`;

export const ContentPilots = styled.View`
  width: 100%;
  height: 100px;
  padding: ${spacings.spacing.xs};
  gap: ${spacings.spacing.xxs};
  border-radius: ${spacings.spacing.xs};
  border: 1px;
  border-color: ${colors.neutro.neutro300};
  top: ${spacings.spacing.xs};
  margin-bottom: ${spacings.spacing.xs};
`;

export const InformationPilot = styled.View`
  height: 22px;
  padding: ${spacings.spacing.mim} ${spacings.spacing.xxs}
    ${spacings.spacing.xxs} ${spacings.spacing.mim};
  border-radius: ${spacings.spacing.mim};
  align-items: center;
  flex-direction: row;
`;

export const NamePilot = styled.Text`
  height: 22px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.005em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
export const NameMark = styled.Text`
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.005em;
text-align: left;
color: ${colors.neutro.neutro400}

`;

export const ContenTitleBotton = styled.View`
  width: 100%;
  height: 22px;
    padding: 0px ${spacings.spacing.xxs}
    0px ${spacings.spacing.xxs};
 flex-direction: row;
 align-items: center;

`;

export const Gold = styled(GoldIcon)`
  width: 14px;
  height: 14px;
`;

export const Silver = styled(SilverIcon)`
  width: 14px;
  height: 14px;
`;

export const Bronze = styled(BronzeIcon)`
  width: 14px;
  height: 14px;
`;
