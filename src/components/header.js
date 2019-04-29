import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
    <div className="uk-navbar-container tm-navbar-container">
      <div className="uk-container">
        <nav className="uk-navbar">
          <div className="uk-navbar-left">
            <a href="../" className="uk-navbar-item uk-logo">
              <img uk-svg="" src="../images/uikit-logo.svg" className="uk-margin-small-right" hidden="true" /> 
            UIkit
            </a>
          </div>
          <div className="uk-navbar-right">
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
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
