import React from "react";

function Post() {
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
          <h5> Lorem ipsum </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </li>
  );
}

export default Post;
