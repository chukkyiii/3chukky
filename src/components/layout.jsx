import * as React from 'react'
import Icon from "../assets/icon.svg"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    navLinks,
    logo,
    infoBox,
    loading_bar,
    all
} from './layout.module.css'

const Layout = ({ children, pageTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const menu = [
        { title: 'README', path:'/' },
        { title: 'PRØJECTS', path: 'https://github.com/chukkyiii?tab=repositories' },
        { title: 'BLØG', path: '/blog' }
    ]

    return (
        <main className={all}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header>
                <div className={loading_bar}></div>
                <Icon className={logo} />
                <nav>
                    <ul className={navLinks}>
                        {
                            menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.path}>
                                            {/* Input CSS for active Links here 
                                                <a
                                                    className={router.pathname === item.path
                                                        ? active
                                                        : non_active
                                                    }
                                                >
                                                    {item.title}
                                                </a>
                                            */}
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <a href='mailto:jgodwin1420@gmail.com'>
                    <button>Contact</button>
                </a>
            </header>
            <div className={infoBox}>
                {children}
            </div>
        </main>
    )
}

export default Layout