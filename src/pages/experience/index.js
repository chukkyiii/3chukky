import * as React from 'react'
import '../../styles/global.css'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

const paragraphStyles = {
  marginBottom: 8,
}

const indent = { 
    marginLeft: '1.5rem',
}

const list = {
    marginBottom: 4,
}

const Style = {
    maxWidth: '1021px',
    marginRight: 'auto',
    marginLeft: 'auto',

    paddingRight: '16px !important',
    paddingLeft: '16px !important',
    
    marginTop: '32px !important',
    marginBottom: '32px !important',
}

const ExperiencePage = () => {
    return (
        <Layout pageTitle="Experience">
            <div style={Style}>
                <p style={paragraphStyles}>
                    For <code>2+</code> years, I have worked on a number of projects using Git and even working maintaining my own code. 
                    As well as working on a number of different projects, I have enjoyed being part of large communities and
                    working with others on social media with over 200 hours of combined experience in Python, Javascript, Java,
                    Bash and several other languages.
                </p>
                <p style={paragraphStyles}>
                    I love to challenge myself and learn new things, and I am always looking to learn more. Whenever I am able to
                    solve issues in a creative and unique way that allows my code to run effectively and efficiently , it's always
                    a great feeling, especially when you are working on something that you have done before. 
                </p>
                <p style={paragraphStyles}>
                    Here are some of the projects I have worked on independently, with each of these I have learnt new frameworks for creating
                    useful projects:
                </p>
                <ul style={indent}>
                    <li style={list}>
                        <Link href="https://github.com/chukkyiii/ONO">
                            Group Chatting Platform, with multiple rooms to Join
                        </Link>
                    </li>
                    <li style={list}> 
                        <Link href="https://github.com/chukkyiii/Wiki-Image-Crawler">
                            Scrape all Wiki images? WIki Image Crawler
                        </Link>
                    </li>
                    <li style={list}>
                        <Link href="https://github.com/chukkyiii/reacton">
                            Reacton: Reaction Speed Tester
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default ExperiencePage

// I am a great team player and I am always looking to learn more.