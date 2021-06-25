import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Logo() {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "wifey.png" }) {
				childImageSharp {
					gatsbyImageData(
						placeholder: DOMINANT_COLOR
						width: 180
						quality: 30
						formats: [WEBP]
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
