import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #7b00c7;
	height: 80px;
	margin-top: 50px;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	box-shadow: 0 0 10px 5px #ff00a2;
	> p:first-child {
		margin-bottom: 10px;
	}
	svg {
		vertical-align: middle;
		color: #ff00f7;
	}
`;
