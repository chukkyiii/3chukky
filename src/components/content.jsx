import * as React from 'react'
import { Link } from 'gatsby'
import {
    all,
    highlighto,
    headingOne,
    paragraphStyle,
    articleStyle,
} from './content.module.css'

const Content = ({children}) => {
    const discName = '!{chukky}'
    return (
        <main className={all}>
            <article className={articleStyle} >
                <h1 className={headingOne}>
                    MOSTLY CONTAINING <span className={highlighto}>CODE</span> & <span className={highlighto}>DESIGN</span>
                </h1>
                <p className={paragraphStyle}> 
                    My name is Jesse, though you may know me by other names. I am a Computer Science Student at Newcastle University 
                    who is also a self taught developer and designer. I have a passion for creating and building things that are useful and appealing.  
                    I am currently looking to collaborate on any projects that I can get my hands on, and I am always open to discussing new ideas.
                    You can reach reach me on Discord with <code>{discName}#5111</code>
                </p>

                <p>If your curious check my projects, you can check <Link href="/experience"><span className={highlighto}>/experience</span> </Link>or click <span className={highlighto}>Projects</span></p>
            </article>
            {children}
        </main>
    )
}

export default Content