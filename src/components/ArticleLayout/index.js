import React from 'react';
import { Header } from '../Header';
import { ArticleLayoutWrapper } from './styles';

export function ArticleLayout({ children }) {
	return (
		<>
			<Header />
			<ArticleLayoutWrapper>
				<main>{children}</main>
			</ArticleLayoutWrapper>
		</>
	);
}
