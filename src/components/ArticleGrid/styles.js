import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
	> h1 {
		font-family: 'Alfa Slab One', cursive;
		background-image: linear-gradient(45deg, #5773ff, #ff0a78);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;
export const ArticleGridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 45px;
	margin-top: 50px;
	@media (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}
`;
