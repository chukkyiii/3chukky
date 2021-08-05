import * as React from 'react'
import Icon from '../assets/icon.svg'

import {
    all,
    headingOne,
    headingTwo,
    paragraphStyle,
    articleStyle,
    logo
} from './content.module.css'

const Content = ({ children }) => {
    const discName = '!{chukky}'
    return (
        <main className={all}>
            <article className={articleStyle}>
                <h1 className={headingOne}>
                    <Icon className={logo} />
                    HI. <br /> MY NAME IS CHUKKY
                </h1>
                <h2 className={headingTwo}>I code, write, and contribute to open source software.</h2>
                <p className={paragraphStyle}> 
                    I’m currently brain-storming + building my website! I’m also currently learning gatsby.js and using it for this site.
                    I’m looking to collaborate on any projects that involve web dev. Currently working on <a href="https://github.com/chukkyiii/ONO"> <code>ONO</code></a>
                    and learning <code>React.</code> You can reach me via email: <code>jgodwin1420@gmail.com</code> or <code>{discName}#5111</code> 
                    on discord.
                </p>
                <a href="/blog" >
                    <button>Blog</button>
                </a>
                
                
            </article>
        </main>
    )
}

export default Content