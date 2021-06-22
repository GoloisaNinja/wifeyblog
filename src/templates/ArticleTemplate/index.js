import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
	query ArticleQuery($articleId: String) {
		strapiArticle(id: { eq: $articleId }) {
			...StrapiArticleFields
		}
	}
`;

export default function ArticleTemplate({ data }) {
	return (
		<div>
			<h1>{data.strapiArticle.title}</h1>
		</div>
	);
}
