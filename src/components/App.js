import React from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";
import UserBio from "./UserBio";
import UserFeed from "./UserFeed";
import FollowBox from "./FollowBox";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <UserProfile />
            <UserBio />
          </div>

          <div className="col-md-4">
            {/* <h3>row 2</h3> */}
            <UserFeed />
          </div>

          <div className="col-md-4">
            {/* <h3> row 3 </h3> */}
            <FollowBox />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
