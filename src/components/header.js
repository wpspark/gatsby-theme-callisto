// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

const HeaderWrapper = styled.div`
  background:#eee;
  h1{
    padding:10px;
    font-size:20px;
    margin:0;
  }
  .header-nav {
    margin-left:30px;
    a{
      color:#929292;
      margin:0px 7px;
      transition:all 0.4s ease;
      &:hover{
          color:#3a3a3a;
      }
    }
  }
  
`
const OrderButton = styled.div`
  a{
    padding:2px 15px;
    background:#1abc9c;
    display:inline-block;
    color:white;
    border-radius:5px;
    transition:all 0.3s ease;
    &:hover{
      color:white;
    }
  }
`

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <header>
    <HeaderWrapper className="">
      <div className="header-container uk-container">
          <div className="uk-grid uk-flex uk-flex-middle">
            <div className="uk-width-expand@m uk-flex uk-flex-left uk-flex-middle">
              <Link to="/">
                <h1 className=""> Blog Demo </h1>
              </Link>
              <nav className="header-nav">
                <Link to="#">
                  Posts
                </Link>
              
                <Link to="#">
                  Categories
                </Link>
              </nav>
            </div>
            <div>
              <OrderButton>
                <Link to="#">
                  Order Now
                </Link>
              </OrderButton>
            </div>
          </div>
          

      </div>
    </HeaderWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
