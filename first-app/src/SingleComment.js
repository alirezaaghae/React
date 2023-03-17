import React from 'react';
import img1 from './image/img.png';

const SingleComment = (props) => {
    return (
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={img1} alt="Profile picture"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        {props.name}
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            heute um {props.time} UHR
                        </span>
                        <div className="rating">
                          <i className="star icon"></i>
                          5 Faves
                        </div>
                    </div>
                    <div className='text'>
                        {props.message}
                    </div>
                    <div className="actions">
                       <a className="reply">Reply</a>
                    </div>
                </div>
            </div>
    )
}

export default SingleComment;