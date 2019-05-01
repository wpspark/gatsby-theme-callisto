import React, { Component } from 'react'
import styled from 'styled-components'

const SocialMenu = styled.div`
    li{
        margin:0px 5px;
    }
`

export default class Social extends Component {
    state = { ready: false };
    componentDidMount = () => {
        if (typeof window !== 'undefined') {
            const uikit = require('uikit');
            const icons = require('uikit/dist/js/uikit-icons.min');
            uikit.use(icons);
            this.setState({ ready: true });
        }
    };
    render() {
        return (
        <SocialMenu className="social-icons">
            <ul className="uk-flex">
                <li><span uk-icon="facebook"></span></li>
                <li><span uk-icon="twitter"></span></li>
                <li><span uk-icon="instagram"></span></li>
            </ul>
        </SocialMenu>
        )
    }
}
