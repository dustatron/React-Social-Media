import React from "react";

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="btn btn-outline-primary">Home</button>
      <button className="btn btn-outline-primary">Notifications</button>
      <button className="btn btn-outline-primary">Messages</button>
      <hr />
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Header;
