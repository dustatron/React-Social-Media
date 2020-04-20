import React from "react";
import PropTypes from "prop-types";

function Post(props) {
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
          <h5> {props.title} </h5>
          <p>{props.body}</p>
        </div>
      </div>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
