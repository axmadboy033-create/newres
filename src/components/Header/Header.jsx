import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-main">
        <div className="logo">SHOP.CO</div>
        <nav className="nav">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>

        <div className="search-and-icons">
          <div className="search-wrapper">
            <div className="searchBar">
              <div className="searchIconWrapper" aria-hidden="true">
                <svg className="searchIcon" viewBox="0 0 24 24">
                  <path d="M10.5 3a7.5 7.5 0 105.32 12.82l4.18 4.18 1.06-1.06-4.18-4.18A7.5 7.5 0 0010.5 3zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z" />
                </svg>
              </div>
              <input className="searchInput" type="search" placeholder="Search for products..." />
            </div>
          </div>

          <div className="icons">
            <button className="icon">🛒</button>
            <button className="icon">👤</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header