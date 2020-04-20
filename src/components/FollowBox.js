import React from "react";
import Friend from "./Friend";

const fakeFriends = [
  {
    name: "johnny appleseed"
  },
  {
    name: "bruce periwinkle"
  },
  {
    name: "elmer sausages"
  }
];

function FollowBox() {
  return (
    <React.Fragment>
      <ul className="list-group">
        {fakeFriends.map((friend, index) => <Friend name={friend.name} key={index} />)}
        {/* <h3>Friend</h3> */}
      </ul>
    </React.Fragment>
  );
}

export default FollowBox;
