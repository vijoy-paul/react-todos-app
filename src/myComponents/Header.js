import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  let headerStyle = {
    width: "100%"
  }
  return (
    <nav className="navbar navbar-light bg-dark " style={headerStyle}>
      <div className="container-fluid">
        <a className="navbar-brand text-light">{props.title}</a>
        {props.searchBar ? <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : ""}
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "Your tilte here",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}