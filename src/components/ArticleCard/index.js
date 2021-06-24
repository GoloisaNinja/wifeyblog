import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GradientText } from '../GradientText';
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
			<GradientText font={"'Patua One', cursive"} color={'#e895e5, #1bc4f2'}>
				<Title>{title}</Title>
			</GradientText>
			<GradientText font={"'Patua One', cursive"} color={'#e895e5, #1bc4f2'}>
				<Author>by {author}</Author>
			</GradientText>
			<Preview>
				<GradientText font={"'Patua One', cursive"} color={'#e895e5, #1bc4f2'}>
					{hookText}
				</GradientText>

				<Link to={`/articles/${id}`}>
					<GradientText
						font={"'Patua One', cursive"}
						color={'#ff0a78, #5773ff'}>
						<p>CONTINUE READING</p>
					</GradientText>
				</Link>
			</Preview>
			<GradientText font={"'Patua One', cursive"} color={'#ff0a78, #5773ff'}>
				<CreatedAt>
					<p>published {createdAt.slice(0, 10)}</p>
				</CreatedAt>
			</GradientText>
		</ArticleCardWrapper>
	);
}
