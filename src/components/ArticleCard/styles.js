import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(85deg, #40084d, #2e0038);
	box-shadow: 0 0 10px 5px #ff00f7, 0 0 10px 10px #5773ff;
	> div {
		flex: 1;
	}
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
	}
`;
export const Title = styled.div`
	font-family: 'Patua One', cursive;
	font-size: 1.65em;
	text-align: center;
	margin-top: 15px;
	padding: 10px;
	background-image: linear-gradient(45deg, #e895e5, #1bc4f2);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
export const Author = styled.div`
	font-family: 'Patua One', cursive;
	font-size: 0.75em;
	text-align: center;
	padding: 10px;
	background-image: linear-gradient(45deg, #e895e5, #1bc4f2);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
export const Preview = styled.div`
	font-family: 'Patua One', cursive;
	font-size: 1.25em;
	padding: 20px;
	background-image: linear-gradient(45deg, #ff00f7, #1bc4f2);
	background-clip: text;
	flex: 1;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	> a {
		text-align: center;
		> p {
			margin-top: 20px;
		}
	}
`;
export const CreatedAt = styled.div`
	font-family: 'Patua One', cursive;
	font-size: 0.75em;
	text-align: right;
	padding-right: 10px;
	padding-bottom: 10px;
	background-image: linear-gradient(45deg, #ff00f7, #5773ff);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
