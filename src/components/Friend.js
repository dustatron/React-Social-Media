import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-2 images">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/instagram+person+profile+icon-1320184028516722357.png"
            alt="avatar"
          />
        </div>
        <div className="col-sm-10">
          <p id="friend-name" className="text-center">
            {props.name}
          </p>
          <button className="btn btn-primary btn-block"> Button </button>
        </div>
      </div>
    </li>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired
};

export default Friend;
