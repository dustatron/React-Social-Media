import React from "react";
import Friend from "./Friend";

function FollowBox() {
  return (
    <React.Fragment>
      <ul className="list-group">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />

        {/* <h3>Friend</h3> */}
      </ul>
    </React.Fragment>
  );
}

export default FollowBox;
