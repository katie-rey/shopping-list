import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className=" hero is-small has-text-white is-flex is-justify-content-center is-align-items-center">
          <Link className=" hero-body" to="/">
            <h1 className="title">My Shopping List</h1>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
