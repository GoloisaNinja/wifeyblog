import { graphql } from 'gatsby';

export const articleFields = graphql`
	fragment StrapiArticleFields on StrapiArticle {
		strapiId
		title
		content
		hookText
		id
		created_at
		author {
			username
			avatar {
				localFile {
					childImageSharp {
						gatsbyImageData(
							width: 200
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
					}
				}
			}
		}
		image {
			localFile {
				childImageSharp {
					gatsbyImageData(
						width: 1000
						placeholder: BLURRED
						formats: [AUTO, WEBP]
					)
				}
			}
		}
	}
`;
