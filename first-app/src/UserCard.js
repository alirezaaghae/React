import React from 'react';
import img1 from './image/img.png';

const UserCard = (props) => {
    return(
        <div className="ui card">
  <div className="image">
    <img src={img1}/>
  </div>
  <div className="content">
    <a className="header">Kristy</a>
    <div className="meta">
      <span className="date">Joined in 2013</span>
    </div>
    <div className="description">
      {props.children}
    </div>
  </div>
  <div className="ui bottom button">
      <i className="add icon"></i>
      Comment
  </div>
</div>
    )
}

export default UserCard;