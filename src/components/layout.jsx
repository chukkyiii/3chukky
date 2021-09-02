import * as React from 'react'
import Icon from "../assets/icon.svg"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    navLinks,
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
                    <ul className={navLinks}>
                        <li>
                            <Link to='/'>
                                README.
                            </Link>
                        </li>
                        <li>
                            <Link to='https://github.com/chukkyiii?tab=repositories'>
                                PROJECTS.
                            </Link>
                        </li>
                        <li>
                            <Link to='/gallery'>
                                GALLERY
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog'>
                                BLOG.
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a href='mailto:jgodwin1420@gmail.com'>
                    <button>Contact</button>
                </a>
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