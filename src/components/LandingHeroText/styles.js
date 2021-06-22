import styled from 'styled-components';

export const HeroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	//box-shadow: 0 15px 8px -8px #8c00ff;
	padding-bottom: 25px;
	@media (min-width: 940px) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;
export const HeroTextWrapper = styled.section`
	display: flex;
	flex-direction: column;
	h1,
	h4 {
		font-family: 'Alfa Slab One', cursive;
		background-image: linear-gradient(45deg, #ff0a78, #5773ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	h1 {
		margin-top: 0;
	}
	h4 {
		flex: 1;
	}
	@media (min-width: 940px) {
		margin-right: 25px;
	}
`;
export const HeroButton = styled.button`
	border: none;
	background: none;
	font-family: 'Alfa Slab One', cursive;
	font-size: 1.5em;
	width: 100%;
	border: 2px solid #ff00f7;
	color: #5773ff;
	padding: 10px;
	cursor: pointer;
	margin-top: 35px;
	box-shadow: 0 0 10px 5px #ff00f7;
	&:hover {
		background: #5773ff;
		color: #ffa6fc;
		box-shadow: 0 0 10px 5px #5773ff;
		border: 2px solid #5773ff;
	}
	@media (min-width: 940px) {
		margin-top: 0;
	}
`;
export const HeroImageWrapper = styled.div`
	margin: 0 auto;
	margin-top: 70px;
	box-shadow: 0 0 10px 5px #ff00f7;
	> div:first-child {
		img {
			border-radius: 5px;
		}
	}
	@media (min-width: 940px) {
		min-width: 500px;
		margin-top: 0;
	}
`;
