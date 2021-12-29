import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { StaticImage } from 'gatsby-plugin-image';

import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: false)
          }
        }
      }
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: "null" } }
        limit: 20
      ) {
        nodes {
          title
          guest {
            name
          }
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
          id
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="corgi sitting on a bed with red hearts. it looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello World</h1>
      <Link to="/about">About this site</Link>

      <h2>Check out my recent posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>

      <h2>
        Latest Episodes of <em>Learn with Jason</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://learnwithjason.dev">Watch all episodes</a>
    </Layout>
  );
}
