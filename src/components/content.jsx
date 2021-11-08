import * as React from 'react'
import Icon from '../assets/icon.svg'

import {
    all,
    highlight,
    headingOne,
    headingTwo,
    paragraphStyle,
    articleStyle,
    blogButton,
    logo,
} from './content.module.css'

const Content = ({ Title, children }) => {
    const discName = '!{chukky}'
    return (
        <main className={all}>
            <title>{Title}</title>
            <article className={articleStyle} >
                <h1 className={headingOne}>
                    <Icon className={logo} />
                    Hi. <br /> My name is Chukky.
                </h1>
                <h2 className={headingTwo}>I code, write, and contribute to open source software.</h2>
                <p className={paragraphStyle}> 
                    I’m currently working on <a href="https://reacton.tech">reacton.tech</a><span className={highlight}>+</span> I’m looking to collaborate on any projects. 
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