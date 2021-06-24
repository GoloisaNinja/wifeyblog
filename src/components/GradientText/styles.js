import styled from 'styled-components';

export const GradientText = styled.div`
	font-family: ${(props) => props.font};
	background-image: ${(props) => `linear-gradient(45deg, ${props.color})`};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
