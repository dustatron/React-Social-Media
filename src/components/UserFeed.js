import React from "react";
import Post from "./Post";

function UserFeed() {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li class="list-group-item active">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Post
              </span>
            </div>
            <input className="form-control" type="text" placeholder="What's happening?" />
          </div>
        </li>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </React.Fragment>
  );
}

export default UserFeed;
