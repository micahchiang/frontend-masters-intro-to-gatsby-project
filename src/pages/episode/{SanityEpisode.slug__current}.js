import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout.js';

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;
  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={episode?.image?.asset?.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date}) - {episode.description}
      </p>
      <ul>
        <li>
          <a href={`https://learnwithjason.dev/${episode.slug.current}`}>
            full episode details
          </a>
        </li>
      </ul>
    </Layout>
  );
}
