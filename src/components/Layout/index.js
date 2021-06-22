import React from 'react';
import { MainLayoutWrapper } from './styles';
import { Header } from '../Header';
import { LandingHeroText } from '../LandingHeroText';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainLayoutWrapper>
				<LandingHeroText />
				<main>{children}</main>
			</MainLayoutWrapper>
			{/* Footer element to be made in the future */}
		</>
	);
};

export { Layout };
