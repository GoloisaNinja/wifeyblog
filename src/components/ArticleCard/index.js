import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
	ArticleCardWrapper,
	Title,
	Preview,
	Author,
	CreatedAt,
} from './styles';

export function ArticleCard({ title, hookText, author, image, createdAt, id }) {
	return (
		<ArticleCardWrapper>
			<div>
				<div>
					<GatsbyImage image={image} alt='article image' />
				</div>
			</div>
			<div>
				<Title>{title}</Title>
				<Author>by {author}</Author>
				<Preview>
					{hookText}
					<Link to={`/articles/${id}`}>
						<p>CONTINUE READING</p>
					</Link>
				</Preview>
				<CreatedAt>published {createdAt.slice(0, 10)}</CreatedAt>
			</div>
		</ArticleCardWrapper>
	);
}
