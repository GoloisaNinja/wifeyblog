import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(85deg, #40084d, #2e0038);
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

		> div:last-child {
			margin-top: 20px;
		}
	}
`;
export const CreatedAt = styled.div`
	font-size: 0.75em;
	padding-right: 10px;
	padding-bottom: 10px;
`;
