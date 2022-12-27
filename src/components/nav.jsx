import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Newscard from "./newsCard";
import './styles/nav.css';

const Nav = ({searchText,setSearchText}) => {
    // const [searchText,setSearchText]=useState('');
    return (
        <>
            <nav>
                <div className="navBrand">Hackernews</div>
                <form className="searchArea">
                    <input className="searchTxt" type="search" placeholder="Search me" id="searchText" name="searchText" onChange={event=>setSearchText(event.target.value)}/>
                    {/* <button className="searchBtn" type="submit" onClick={()=><Newscard searchValue={searchText}/>}>Search</button> */}
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