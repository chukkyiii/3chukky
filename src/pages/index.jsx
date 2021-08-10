import * as React from 'react'
import '../styles/global.css'
import Content from '../components/content'

const IndexPage = () => {
    let word = Math.random().toString(36).substring(2,7);
    let yourTitle = word.concat(' Is obviously a word')
    return (
        <Content Title={yourTitle}>
        {/*           _ ._  _ , _ ._
                    (_ ' ( `  )_  .__)
                ( (  (    )   `)  ) _)
                (__ (_   (_ . _) _) ,__)
                    `~~`\ ' . /`~~`
                        ;   ;
                        /   \
        _____________/_ __ \_____________  */}
        </Content>
    )
}

export default IndexPage

