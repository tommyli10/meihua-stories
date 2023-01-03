import * as React from 'react';
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main className='hero'>
          <div>
            <h1 className='headline'>我是美华</h1>
            <p className='subtitles'>有时候会写下一些我脑袋里面无聊的东西</p>
            <div className='hero-links'>
              <Link className='button' to='/work'>我的东西</Link>
              <Link className='button' to='/about'>关于我</Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
