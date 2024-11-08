import styled from 'styled-components/native';
// import spacings from '../../themes/spacings';
// import colors from '../../themes/colors';

export const Date = styled.Text`
 //styleName: Mobile/14px/Semi Bold;
 color: ${(props: { color: string; }) => props.color};
font-family: Inter;
font-size: 14px;
font-weight: ${(props: { fontWeight: string; }) => props.fontWeight};
line-height: 20px;
letter-spacing: -0.005em;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

  
`;






