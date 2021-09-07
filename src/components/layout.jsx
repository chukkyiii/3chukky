import * as React from 'react'
import Icon from "../assets/icon.svg"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    navLinks,
    logo,
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
                            <a href='https://github.com/chukkyiii?tab=repositories'>
                                PRØJECTS.
                            </a>
                        </li>
                        <li>
                            <Link to='/blog'>
                                BLØG.
                            </Link>
                        </li>
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