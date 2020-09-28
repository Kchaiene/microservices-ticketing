import React from "react";
import {UserContext} from "../../react-context/user-context";
import Link from "next/link";


const Header = () => {
  const {currentUser} = React.useContext(UserContext);
  const currentUserId = currentUser && currentUser.id;
  const links = [
    !currentUserId && {label:"Sign Up", href:"/auth/signup"},
    !currentUserId && {label:"Sign In", href:"/auth/signin"},
    currentUserId && {label:"Sell Tickets", href:"/tickets/new"},
    currentUserId && {label:"My Orders", href:"/orders"},
    currentUserId && {label:"Sign Out", href:"/auth/signout"},
  ];

  const showLinks = links => links.map(link=> Boolean(link) &&
    <li key={link.href} className="nav-item">
      <Link href={link.href}><a className="nav-link">{link.label}</a></Link>
    </li> );
  // console.log("Header Render", currentUser);



  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/"><a className="navbar-brand">GitTix</a></Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {showLinks(links)}
        </ul>
      </div>
    </nav>
  )
};


export default Header;