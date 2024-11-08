import styled from 'styled-components/native';

export const Title = styled.Text`
//styleName: Mobile/Heading/H6;
font-family: Inter;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: -0.02em;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: ${(props: { color: string; }) => props.color};  
font-weight: ${(props: { fontWeight: string; }) => props.fontWeight};
`;






