import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Header() {
    return (
        <header>
            <div>
                <Link to='/'>回家</Link>
            </div>
            <div>
                <Link to='/work'>我的东西</Link>
                <Link to='/about'>关于我</Link>
            </div>
        </header>
    )
}
