import React from 'react';
import author1 from "../Discover/img/author1.png";
import './Comment.scss'

const Cooment = () => {
    return (
        <div className='comment'>
            <img className='comment__user-photo' src={author1} />
            <div className='comment-info'>
                <p className='comment-info__user-name'>Budi Hakim</p>
                <p className='comment-info__content'>Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i Here text comment for text ing i </p>
                <div className='comment-actions'>
                    <span>
                       <p>50</p>
                    </span>
                    <span>
                       <p>20</p>
                    </span>
                    <p>Reply</p>
                    <p>20 Check reply</p>
                </div>
            </div>
        </div>
    );
};

export default Cooment;