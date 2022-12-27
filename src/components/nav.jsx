import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './styles/nav.css';

const Nav = () => {
    return (
        <>
            <nav>
                <div className="navBrand">Hackernews</div>
                <form className="searchArea">
                    <input className="searchTxt" type="search" placeholder="Search me" id="searchText" name="searchText" />
                    <button className="searchBtn" type="submit">Search</button>
                </form>
                <ul className="navListItem">
                    <li className="navList">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navList">
                        <Link to="/jobs">Jobs</Link>
                    </li>
                </ul>
            </nav>
        </>
    );

}
export default Nav;