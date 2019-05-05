// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import logo from "../images/tg-logo.png"
import '../../node_modules/uikit/dist/js/uikit.js';

const HeaderWrapper = styled.div`
  background:#ffffff;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 99;
  
`
const OrderButton = styled.div`
  a{
    transition:all 0.3s ease;
  }
`

export default class Header extends Component {
    state = { ready: false };
    componentWillMount = () => {
        if (typeof window !== 'undefined') 
        {
            const Uikit = require('uikit');
            const UikitIcons = require('uikit/dist/js/uikit-icons.min');
            Uikit.use(UikitIcons);

            this.setState({ ready: true });
        }
    };
    render() {
        let {siteTitle} = this.props;

        return (

          this.state.ready ? 
            <header>
              <HeaderWrapper>
                <div className="header-container uk-container">
                    <div className="uk-grid uk-flex uk-flex-middle">
                      <div className="uk-width-expand@m uk-flex uk-flex-left uk-flex-middle">
                        <Link to="/">
                          <img className="uk-logo" src={logo} alt="ThemesGrove Logo" width="200" uk-img="" alt={siteTitle} />
                        </Link>
                      </div>
                      <div>
                        <OrderButton className="uk-padding-small">
                          <a className="uk-button uk-button-default uk-border-rounded" href="https://themesgrove.com" target="_blank" rel="noopener noreferrer">
                            <span className="uk-margin-small-right" uk-icon="reply"></span> Back to Main site
                          </a>
                        </OrderButton>
                      </div>
                    </div>
                </div>
              </HeaderWrapper>
            </header>
          : 
          null
        )
    }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
