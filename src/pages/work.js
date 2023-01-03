import React from 'react';
import Project from '../components/Project-Preview';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.scss';

export default function projects({ data }) {
    const projects = data.projects.nodes;

    return (
        <>
            <Layout>
                <div>
                    <div className='work'>
                        <div className='projects-list'>
                            {projects.map(project => (
                                <Project
                                    title={project.frontmatter.title}
                                    url={project.frontmatter.slug}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query AllProjects {
        projects: allMarkdownRemark(sort: {frontmatter: {order: ASC}}) {
            nodes {
                frontmatter {
                    slug
                    title
                }
            }
        }
    }
`;