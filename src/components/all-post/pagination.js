import React, { Component } from 'react'
import { Link } from "gatsby"

const NavLink = props => {
  if (!props.test) {
    return <Link className={props.className} to={props.url}>{props.text}</Link>
  } else {
    return <Link to={'/'} className={props.className} disabled="disabled">{props.text}</Link>
  }
}

export default class AllPostPagination extends Component {
    
    createTable = (pageCount) => {
      let children = []
      // Outer loop to create parent
      for (let i = 1; i <= pageCount; i++) {
        children.push(<li key={i}><Link className="pagination-link" aria-label={'Goto page' + i} to={'/' + (i === 1 ? '' : i)}>{i}</Link></li>)
      }
      return children
    }

    render() {
      const { index, first, last, pageCount } = this.props;
      const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
      const nextUrl = (index + 1).toString()

      return (
        <section className="section columns is-centered">
          <nav className="pagination is-half" role="navigation" aria-label="pagination">
            
            <NavLink className="pagination-previous" test={first} url={previousUrl} text="Go to Previous Page" />
            
            <ul className="pagination-list">{this.createTable(pageCount)}</ul>

            <NavLink className="pagination-next" test={last} url={nextUrl} text="Go to Next Page" />

          </nav>
        </section>
      )
    }
}

// <li>
//               <a href="/" className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
//             </li>
//             <li>
//               <a href="/" className="pagination-link" aria-label="Goto page 2">2</a>
//             </li>
//             <li>
//               <a href="/" className="pagination-link" aria-label="Goto page 3">3</a>
//             </li>
// <a href="/" className="" title="This is the first page" disabled>Previous</a>

// <div className="previousLink">
//   <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
// </div>
// <div className="nextLink">
//   <NavLink test={last} url={nextUrl} text="Go to Next Page" />
// </div>