import React from "react";
import menu from "./menu.png";
import profile from "./use icon.webp";
import bag from "./bag.png";
import logo from "./boAt_logo_small.svg";
import search from "./search.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-upper">
        <section className="left-navbar">
          <img className="menu" src={menu} alt="" />
          <img className="logo" src={logo} alt="" />
        </section>
        <section className="right-navbar">
          <img className="profile" src={profile} alt="" />
          <img className="bag" src={bag} alt="" />
        </section>
      </div>
      <div className="navbar-lower">
        <section className="searchbar">
            <input className="searchinput" type="text" placeholder="search"/>
            <img className="search" src={search} alt=""/>
        </section>
      </div>
    </div>
  );
}
