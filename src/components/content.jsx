import * as React from 'react'
import Name from '../assets/name.svg'

import {
    all,
    highlightg,
    highlighto,
    headingOne,
    paragraphStyle,
    articleStyle,
    blogButton,
    logo,
} from './content.module.css'

const Content = ({Title, children }) => {
    const discName = '!{chukky}'
    return (
        <main className={all}>
            <title>{Title}</title>
            <article className={articleStyle} >
                <h1 className={headingOne}>
                    CREATION BY <Name classname={logo}/> <br />
                    MOSTLY CONTAINING <span className={highlighto}>CODE</span> & <span className={highlighto}>DESIGN</span>
                </h1>
                <p className={paragraphStyle}> 
                    I’m currently working on <a href="https://reacton.tech">reacton.tech</a><span className={highlightg}>+</span> I’m looking to collaborate on any projects. 
                    I have other projects like <a href="https://github.com/chukkyiii/ONO">ONO</a>using <a href='https://flask.palletsprojects.com/en/2.0.x/'>Flask</a> and   
                    <a href="https://github.com/chukkyiii/Wault"> Wault</a>a Json Table Generator. I am mostly learning Python, Javascript more specifically <a href='https://reactjs.org/'>React</a>
                    and Java. I am also writing blogs on what I am working on, tips and also solutions to problems I may encounter. <br/>
                    You can reach me on discord with <code>{discName}#5111</code>.
                </p>
                <a href="/blog" >
                    <button className={blogButton}>Blog</button>
                </a> 
            </article>
            {children}
        </main>
    )
}

export default Content