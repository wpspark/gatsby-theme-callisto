import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const SiteFooter = styled.footer`
    background:#eee;
    padding:15px 0px;
    .footer-wrapper {
        /* display:flex; */
        /* align-items:center; */
        /* justify-content: center; */
        .f-left{
            /* text-align:left; */
            /* margin:0px 20px; */
            h4{
                margin-bottom:0px;
            }
        }
        .f-right{
            text-align:right;
            color:#929292;
            /* margin:0px 20px; */
            a{
                color:#868686;
                margin:0px 5px;
                font-family:'Montserrat', sans-serif;
                transition:all 0.4s ease;
                font-weight:bold;
                &:hover{
                    color:#3a3a3a;
                }
            }
        }
    }
`


export default class Footer extends Component {
  render() {
    return (
        <SiteFooter>
            <div className="footer-wrapper uk-container">
                <div className="footer-wrapper-container uk-flex ">
                    <div className="f-left uk-width-1-2" >
                        <Link to="/">
                            <h4>
                                Blog Demo
                            </h4>
                        </Link>
                    </div>
                    <div className="f-right uk-width-1-2" >
                        Powered By 
                        <a href="https://themesgrove.com/">Themesgrove</a>
                        {` `}
                        © {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </SiteFooter>
    )
  }
}
