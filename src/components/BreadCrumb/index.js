import React from "react";
import {Link} from 'react-router-dom'

import {Wrapper, Content} from './BreadCrumb.styles'

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            <span>|</span>
            </Link>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)
export default BreadCrumb