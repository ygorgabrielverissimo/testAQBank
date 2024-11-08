import styled from 'styled-components/native';
import spacings from '../../themes/spacings';
import colors from '../../themes/colors';

import ArrowIcon from '../../assets/svg/arrow-right-s-line.svg';

export const ContentBotton = styled.TouchableOpacity`
  width: 100%px;
  height: 56px;
  padding: ${spacings.spacing.sm};
  border-radius: ${spacings.spacing.xs};
  background-color: ${colors.neutro.neutro900};
 align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  width: 90px;
  height: 20px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.005em;
  text-align: left;
  color: ${colors.primary.main};
`;

export const Arrow = styled(ArrowIcon)`
  width: 24px;
  height: 24px;
`;
