import styled from 'styled-components';

export const HeroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	//align-items: stretch;
	padding-bottom: 25px;
	@media (min-width: 940px) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;
export const HeroTextWrapper = styled.section`
	display: flex;
	flex-direction: column;
	> div:nth-child(2) {
		display: flex;
		flex: 1;
	}
	h1 {
		margin-top: 0;
		font-size: 4em;
	}
	@media (min-width: 940px) {
		margin-right: 25px;
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
