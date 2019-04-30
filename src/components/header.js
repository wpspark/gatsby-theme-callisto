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
      <div className="uk-container">
          <Link to="/">
            <h1 className=""> Blog Demo </h1>
          </Link>
          {/* <nav className="uk-navbar uk-align-center"> */}

          {/* <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@m">
              <li className="uk-active">
                <Link to="/">
                  Home
                </Link>
              </li>
              
              <li className="uk-active">
                <Link to="/posts">
                  Posts
                </Link>
              </li>
              
              <li className="uk-active">
                <Link to="/categories">
                  Categories
                </Link>
              </li>
            </ul>
          </div> */}

          {/* </nav> */}

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
