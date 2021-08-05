import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle='README.'>
            <h1>
                HI 👋👋👋
            </h1> 
            <p>Here are some ideas to get you started</p>
            <ul>
                <li>
                    🔭 I’m currently brain-storming 🧠 + building my website!
                </li>
                <li>
                    🌱 I’m also currently learning gatsby.js
                </li>
                <li>
                    👯 I’m looking to collaborate on any projects that involve web dev, python, javascript or c#.
                </li>
                <li>
                    💬 Contact if you need me to contribute!
                </li>
                <li>
                    📫 How to reach me: <code>jgodwin1420@gmail.com</code> or <code>!chukky#5111</code> on discord.
                </li>
            </ul>
            <p>I'm a self-taught programmer and designer. 👺</p>
            <h2>Let's Connect! 🌐</h2>
            <ul>
                <li>
                    <Link to='https://www.instagram.com/chukkyiii/'>
                        Instagram
                    </Link>
                </li>
                <li>
                    <Link to='https://twitter.com/chukky_iii'>
                        Twitter
                    </Link>
                </li>
                <li>
                    <Link to='https://github-readme-stats.vercel.app/api?username=chukkyiii&show_icons=true&theme=dark'>
                        based github stats
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default IndexPage