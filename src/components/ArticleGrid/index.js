import React, { useContext } from 'react';
import ArticleContext from '../../context/ArticleContext';
import { ArticleGridWrapper, SectionWrapper } from './styles';
import { ArticleCard } from '../ArticleCard';
import { GradientH1 } from '../GradientText';

export function ArticleGrid() {
	const { articles } = useContext(ArticleContext);
	return (
		<SectionWrapper>
			<GradientH1 font={"'Alfa Slab One', cursive"} color={'#5773ff, #ff0a78'}>
				Featured Articles
			</GradientH1>
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
