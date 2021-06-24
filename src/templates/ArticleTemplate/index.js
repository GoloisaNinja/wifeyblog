import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArticleLayout } from '../../components/ArticleLayout';
import { Button } from '../../components/Button';
import { GradientText } from 'components';
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
					/>
				</ArticleImageWrapper>

				<GradientText
					font={"'Alfa Slab One', cursive"}
					color={'#ff0a78, #5773ff'}>
					<h1>{data.strapiArticle.title}</h1>
				</GradientText>
				<ArticleByLine>
					<GradientText
						font={"'Alfa Slab One', cursive"}
						color={'#ff0a78, #5773ff'}>
						<h5>written by {data.strapiArticle.author.username}</h5>
					</GradientText>
				</ArticleByLine>
			</ArticleHeader>
			<ArticleHookTextWrapper>
				<GradientText
					font={"'Alfa Slab One', cursive"}
					color={'#5773ff, #ff0a78'}>
					<h4>{data.strapiArticle.hookText}</h4>
				</GradientText>
			</ArticleHookTextWrapper>
			<ArticleContentWrapper>
				{data.strapiArticle.content}
			</ArticleContentWrapper>
		</ArticleLayout>
	);
}
