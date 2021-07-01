import React from 'react';
import { FaHeart, FaCopyright } from 'react-icons/fa';
import { FooterWrapper } from './styles';

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<FooterWrapper>
			<p>
				Made with <FaHeart /> for my pretty wifey
			</p>
			<p>
				PrettyWifey PrettyKillerBlog <FaCopyright /> {currentYear}
			</p>
		</FooterWrapper>
	);
}
