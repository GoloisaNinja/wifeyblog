import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArticleLayout } from '../../components/ArticleLayout';
import { Button } from '../../components/Button';
import { GradientH1, GradientH5, GradientH4 } from 'components';
import {
	ArticleHeader,
	ArticleByLine,
	ArticleImageWrapper,
	ArticleHookTextWrapper,
	ArticleContentWrapper,
} from './styles';

export const query = graphql`
	query ArticleQuery($articleId: String) {
		strapiArticle(id: { eq: $articleId }) {
			...StrapiArticleFields
		}
	}
`;

export default function ArticleTemplate({ data }) {
	return (
		<ArticleLayout>
			<Button mt={'0px'} onClick={() => navigate(-1)}>
				Back to home
			</Button>
			<ArticleHeader>
				<ArticleImageWrapper>
					<GatsbyImage
						image={
							data.strapiArticle.image.localFile.childImageSharp.gatsbyImageData
						}
						alt='article title image'
					/>
				</ArticleImageWrapper>
				<GradientH1
					font={"'Alfa Slab One', cursive"}
					color={'#ff0a78, #5773ff'}>
					{data.strapiArticle.title}
				</GradientH1>
				<ArticleByLine>
					<GradientH5
						font={"'Alfa Slab One', cursive"}
						color={'#ff0a78, #5773ff'}>
						written by {data.strapiArticle.author.username}
					</GradientH5>
				</ArticleByLine>
			</ArticleHeader>
			<ArticleHookTextWrapper>
				<GradientH4
					font={"'Alfa Slab One', cursive"}
					color={'#5773ff, #ff0a78'}>
					{data.strapiArticle.hookText}
				</GradientH4>
			</ArticleHookTextWrapper>
			<ArticleContentWrapper>
				{data.strapiArticle.content}
			</ArticleContentWrapper>
		</ArticleLayout>
	);
}
