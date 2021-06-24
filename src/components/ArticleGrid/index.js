import React, { useContext } from 'react';
import ArticleContext from '../../context/ArticleContext';
import { ArticleGridWrapper, SectionWrapper } from './styles';
import { ArticleCard } from '../ArticleCard';
import { GradientText } from '../GradientText';

export function ArticleGrid() {
	const { articles } = useContext(ArticleContext);
	return (
		<SectionWrapper>
			<GradientText
				font={"'Alfa Slab One', cursive"}
				color={'#5773ff, #ff0a78'}>
				<h1>Featured Articles</h1>
			</GradientText>
			<ArticleGridWrapper>
				{articles.map((article) => (
					<ArticleCard
						key={article.id}
						id={article.id}
						title={article.title}
						author={article.author.username}
						hookText={article.hookText}
						createdAt={article.created_at}
						image={article.image.localFile.childImageSharp.gatsbyImageData}
					/>
				))}
			</ArticleGridWrapper>
		</SectionWrapper>
	);
}
