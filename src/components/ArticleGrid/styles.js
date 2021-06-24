import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
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
