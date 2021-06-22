import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Logo() {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "wifey.png" }) {
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						width: 200
						quality: 100
						formats: [AUTO, WEBP]
					)
				}
			}
		}
	`);
	return (
		<GatsbyImage
			image={data.file.childImageSharp.gatsbyImageData}
			alt='site logo'
		/>
	);
}
