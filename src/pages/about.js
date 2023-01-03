import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function about({ data }) {
    const pic = getImage(data.file.childImageSharp);

    return (
        <>
            <Layout>
                <div className='about'>
                    <div className='about-intro-section'>
                        <div className='profile-pic'>
                            <GatsbyImage image={pic} alt='profile picture' />
                        </div>
                        <div className='profile-summary'>
                            <div>
                                <p>你好，我叫美华。我是土生土长的番禺地胆。我以前是有十二年经验的护士，在新冠之后我开始在家陪我女儿们。现在我变成了一位全职家庭主妇。</p>
                                <br />
                                <p>无聊的时候我会陪我的两个调皮蛋女儿去逛书店和买奶茶。有时我喜欢写下我脑袋里乱七八糟的东西。如果你有兴趣你可以在这里逛一逛。</p>
                            </div>
                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='profile-topic'>
                            <h2>网站</h2>
                        </div>
                        <div className='profile-summary'>
                            <p>这个网站是我请我在美国洛杉矶的表弟<a className='cousin' href='https://www.linkedin.com/in/tommyli10'>Tommy</a>帮我做的。如果你喜欢你也可以联系他。</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>)
}


export const query = graphql`
    query GetPicture {
    file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        },
        gatsbyImageData(placeholder:DOMINANT_COLOR, formats: AUTO)
        }
    }
    }
`