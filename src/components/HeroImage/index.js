import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

export function HeroImage() {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "pretty.webp" }) {
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						width: 500
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
			alt='pretty wifey'
		/>
	);
}
