require('dotenv').config({ path: '.env' });
module.exports = {
	siteMetadata: {
		title: `Wifey Blog`,
		description: `A blog about all things pretty and pretty messed up.`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-optional-chaining',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					'inter:200, 200i, 400, 400i, 700, 700i, 800, 800i, 900, 900i',
					'poppins:200, 200i, 400, 400i, 700, 700i, 800, 800i, 900, 900i',
					'alfa slab one: 400',
					'patua one: 400',
				],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.GATSBY_STRAPI_HEROKU || 'http://localhost:1337',
				collectionTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					'article',
					'user',
				],
				queryLimit: 1000,
			},
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
			__key: 'images',
		},
	],
};
