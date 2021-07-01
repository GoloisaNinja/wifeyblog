import React from 'react';
import { MainLayoutWrapper } from './styles';
import { Header } from '../Header';
import { LandingHeroText } from '../LandingHeroText';
import { Footer } from '../Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainLayoutWrapper>
				<LandingHeroText />
				<main>{children}</main>
			</MainLayoutWrapper>
			<Footer />
		</>
	);
};

export { Layout };
