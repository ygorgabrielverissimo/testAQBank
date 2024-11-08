import styled from 'styled-components/native';
import spacings from '../../themes/spacings';

import LeadIcon from '../../assets/svg/lead-icon.svg';

export const InformationButton = styled.View`
  width: ${(props: { size: number; }) => props.size}px;
  height: 22px;
  padding: ${spacings.spacing.mim} ${spacings.spacing.xxs}
    ${spacings.spacing.xxs} ${spacings.spacing.mim};
  border-radius: ${spacings.spacing.mim};
  background: ${(props: { color: string; }) => props.color};
  flex-direction: row;
  
`;

export const TitleButton = styled.Text`
  width: 240px;
  height: 22px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: '#000';
`;

export const ContenTitleBotton = styled.View`
  width: 190px;
  height: 22px;
  justify-content: center;
  padding: ${spacings.spacing.mim} ${spacings.spacing.xxs}
    ${spacings.spacing.xxs} ${spacings.spacing.mim};
`;

export const Lead = styled(LeadIcon)`
  width: 14px;
  height: 14px;
`;






