import React from "react";

function UserProfile() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDnqqKmmCwDwVN2DXj-I_LZxnTADCjH611mxWviWGCvkIlLD1X&usqp=CAU"
          alt="Card image cap"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">Jeremy Bearimy</h5>

        <a href="#" className="card-link">
          Tweet
        </a>
        <a href="#" className="card-link">
          Following
        </a>
        <a href="#" className="card-link">
          Followers
        </a>
      </div>
    </div>
  );
}

export default UserProfile;
