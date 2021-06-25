import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GradientP } from '../GradientText';
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
			<Title>
				<GradientP font={"'Poppins', sans-serif"} color={'#ffffff, #ffadfc'}>
					{title}
				</GradientP>
			</Title>
			<Author>
				<GradientP font={"'Patua One', cursive"} color={'#e895e5, #1bc4f2'}>
					by {author}
				</GradientP>
			</Author>
			<Preview>
				<GradientP font={"'Poppins', sans-serif"} color={'#ffffff, #ff63fa'}>
					{hookText}
				</GradientP>
				<Link to={`/articles/${id}`}>
					<GradientP font={"'Poppins', sans-serif"} color={'#ffffff, #5773ff'}>
						CONTINUE READING
					</GradientP>
				</Link>
			</Preview>
			<CreatedAt>
				<GradientP font={"'Poppins', sans-serif"} color={'#ffffff, #5773ff'}>
					published {createdAt.slice(0, 10)}
				</GradientP>
			</CreatedAt>
		</ArticleCardWrapper>
	);
}
