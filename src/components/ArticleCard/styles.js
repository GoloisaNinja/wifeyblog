import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(45deg, #2e2e2e, #473a4a);
	box-shadow: 0 0 10px 5px #ff00f7, 0 0 10px 10px #5773ff;
	> div:first-child {
		overflow: hidden;
		> div:first-child {
			max-width: 100%;
			transition: 0.5s all ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
	> div:last-child {
		display: flex;
		flex-direction: column;
		margin-left: auto;
	}
`;
export const Title = styled.div`
	font-size: 1.65em;
	font-weight: 900;
	text-align: center;
	margin-top: 15px;
	padding: 10px;
`;
export const Author = styled.div`
	font-size: 0.75em;
	text-align: center;
	padding: 10px;
`;
export const Preview = styled.div`
	font-size: 1.25em;
	padding: 20px;
	flex: 1;
	> a {
		text-align: center;
		text-decoration: none;

		> p:last-child {
			margin-top: 20px;
			padding: 15px;
			border: 1px solid #ff00f7;
		}
	}
`;
export const CreatedAt = styled.div`
	font-size: 0.75em;
	padding-right: 10px;
	padding-bottom: 10px;
`;
