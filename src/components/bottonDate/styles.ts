import styled from 'styled-components/native';
import spacings from '../../themes/spacings';
import colors from '../../themes/colors';

export const ContentBotton = styled.View`
  height: 22px;
  padding: 0px  ${spacings.spacing.mim}  0px ${spacings.spacing.mim};
  border-radius: ${spacings.borderRadius.mim};
  border: 1px;
  border-color: ${colors.blackground.white};
  
`;

export const ContentTitle = styled.View`
  height: 22px;
  padding: 0px ${spacings.spacing.mim}
    0px ${spacings.spacing.mim};
  
    align-items: center;
`;

export const Title = styled.Text`
font-family: Inter;
font-size: 10px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.5px;
text-align: center;
color: ${colors.blackground.white};
`;


