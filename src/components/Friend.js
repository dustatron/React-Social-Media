import React from "react";

function Friend() {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-2 images">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/instagram+person+profile+icon-1320184028516722357.png"
            alt="avatar"
            // style={{ height: "85px" }}
          />
        </div>
        <div className="col-sm-10">
          <p id="friend-name" className="text-center">
            FriendName
          </p>
          <button className="btn btn-primary btn-block"> Button </button>
        </div>
      </div>
    </li>
  );
}

export default Friend;
