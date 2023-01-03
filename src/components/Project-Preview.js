import React from 'react';
import { Link } from 'gatsby';
import '../styles/projects.scss';

export default function Project({ title, period, url }) {
    return (
        <div className='project-preview'>
            <Link to={`/work/${url}`}>
                <h1 className='project-preview-title'>{title}</h1>
            </Link>
        </div>
    )
}
