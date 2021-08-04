import * as React from 'react'
import Icon from "../assets/icon.svg"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    nav_links,
    logo,
    heading,
    infoBox
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

    return (
        <main>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header>
                <Icon className={logo} />
                <nav>
                    <ul className={nav_links}>
                        <li>
                            <Link to='/'>
                                README.
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                PROJECTS.
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog'>
                                BLOG.
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to='/'>
                    <button>Contact</button>
                </Link>
            </header>
            <div className={infoBox}>
                <h1 className={heading}>{pageTitle}</h1>
            </div>
            <div className={infoBox}>
                {children}
            </div>
        </main>
    )
}

export default Layout