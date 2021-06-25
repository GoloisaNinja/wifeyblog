import styled from 'styled-components';

export const Button = styled.button`
	background: none;
	border: none;
	outline: none;
	font-family: 'Alfa Slab One', cursive;
	font-size: 1.5em;
	border: 2px solid #ff00f7;
	color: #5773ff;
	padding: 10px;
	cursor: pointer;
	box-shadow: 0 0 10px 5px #ff00f7;
	margin-top: ${(props) => props.mt};
	@media (min-width: 600px) {
		width: ${(props) => props.location === 'frontpage' && '50%'};
	}
	@media (min-width: 940px) {
		margin-top: 0;
		width: ${(props) => props.location === 'frontpage' && '100%'};
	}
	&:hover {
		background: #5773ff;
		color: #ffa6fc;
		box-shadow: 0 0 10px 5px #5773ff;
		border: 2px solid #5773ff;
	}
`;
