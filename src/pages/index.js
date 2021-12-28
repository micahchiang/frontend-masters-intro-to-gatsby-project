import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
    

    return (
        <Layout>
            <h1>Hello World</h1>
            <Link to="/about">About this site</Link>
        </Layout>
    )
}