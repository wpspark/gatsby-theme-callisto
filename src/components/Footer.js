import React, { Component } from 'react'
import styled from 'styled-components'

const SiteFooter = styled.footer`
    background:#eee;
    padding:20px 0px;
    .footer-wrapper {
        display:flex;
        align-items:center;
        justify-content: center;
        .f-left{
            text-align:left;
            margin:0px 20px;
        }
        .f-right{
            text-align:right;
            margin:0px 20px;
        }
    }
`


export default class Footer extends Component {
  render() {
    return (
        <SiteFooter>
            <div className="footer-wrapper uk-container">
                <div className="f-left" >
                    Blog Demo
                </div>
                <div className="f-right" >
                    Powered By 
                    <a href="https://themesgrove.com/">Themesgrove</a>
                    {` `}
                    © {new Date().getFullYear()}
                </div>
            </div>
        </SiteFooter>
    )
  }
}
