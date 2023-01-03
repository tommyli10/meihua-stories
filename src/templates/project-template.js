import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import '../styles/projects.scss';

export default function project({ data }) {
    const { html } = data.markdownRemark;
    const { period, description, title } = data.markdownRemark.frontmatter;

    return (
        <>
            <Layout>
                <div className='project'>
                    <div className='project-header'>
                        <div className='project-text'>
                            <h1 className='project-title'>{title}</h1>
                        </div>
                    </div>
                    <div className='project-text'>
                        <div
                            className='project-content'
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query ProjectsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`;