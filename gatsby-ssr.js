import React from 'react';
import { ArticleContextProvider } from './src/context/ArticleContext';
import { GlobalStyles } from './src/components/globalStyles';

export const wrapRootElement = ({ element }) => (
	<ArticleContextProvider>{element}</ArticleContextProvider>
);

export const wrapPageElement = ({ element }) => {
	<>
		<GlobalStyles />
		{element}
	</>;
};
