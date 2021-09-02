import * as React from 'react'
import Icon from '../assets/icon.svg'

import {
    all,
    highlight,
    headingOne,
    headingTwo,
    paragraphStyle,
    articleStyle,
    logo
} from './content.module.css'

const Content = ({ Title, children }) => {
    const discName = '!{chukky}'
    return (
        <main className={all}>
            <title>{Title}</title>
            <article className={articleStyle}>
                <h1 className={headingOne}>
                    <Icon className={logo} />
                    Hi. <br /> My name is Chukky.
                </h1>
                <h2 className={headingTwo}>I code, write, and contribute to open source software.</h2>
                <p className={paragraphStyle}> 
                    I’m currently brain-storming <span className={highlight}>+</span> building my website! I’m also currently learning gatsby.js and using it for this site.
                    I’m looking to collaborate on any projects that involve web dev. Currently working on <a href="https://github.com/chukkyiii/ONO"> <code>ONO</code></a>
                    using the <code>Flask</code> webframework and learning <code>React.</code> You can reach me on discord with <code>{discName}#5111</code>.
                </p>
                <a href="/blog" >
                    <button>Blog</button>
                </a> 
            </article>
            {children}
        </main>
    )
}

export default Content