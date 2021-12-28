import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {Seo} from '../components/seo.js';
import Layout from '../components/layout.js';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({data}) {
    return (
            <Layout
                title="About this site"
                description="More information about this site"
            > 
                <GatsbyImage 
                    image={getImage(data.file)}
                    alt="cocktail set inside a thing"
                />
                <h1>About this site</h1>
                <Link to="/">Back to home</Link>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Layout>
    )
}