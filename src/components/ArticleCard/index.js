import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
	ArticleCardWrapper,
	Title,
	Preview,
	Author,
	CreatedAt,
} from './styles';

export function ArticleCard({ title, hookText, author, image, createdAt }) {
	return (
		<ArticleCardWrapper>
			<div>
				<GatsbyImage image={image} alt='article image' />
			</div>
			<div>
				<Title>{title}</Title>
				<Author>by {author}</Author>
				<Preview>{hookText}</Preview>
				<CreatedAt>published {createdAt.slice(0, 10)}</CreatedAt>
			</div>
		</ArticleCardWrapper>
	);
}
