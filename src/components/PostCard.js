import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const PostCard = (props) => {
  const post = props;
  console.log(post.imageUrl);
  dayjs.extend(relativeTime);
  return (
    <div className='container'>
      <div className='row main-row'>
        <div className='col-lg-4 col-md-10 col-sm-12'>
          <div
            className='blog-img'
            style={{ paddingTop: 5 + "%", paddingBottom: 5 + "%" }}
          >
            <img
              src='https://firebasestorage.googleapis.com/v0/b/kt-nation.appspot.com/o/no-img.png?alt=media'
              alt='nature'
              className='img-thumbnail'
            />
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <ul
                className='list-group list-group-horizontal'
                style={{ paddingBottom: 5 + "%" }}
              >
                <li className='list-group-item'></li>
                <i className='fa-solid fa-heart fa-2x'></i>
                <li className='list-group-item'></li>
                <i className=' fa-solid fa-thumbs-down fa-2x'></i>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div className='blog-title' style={{ paddingTop: 5 + "%" }}>
            <h3>Title</h3>
          </div>
          <div className='blog-date' style={{ paddingBottom: 5 + "%" }}>
            <span>{post.userHandle} </span>
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </div>
          <div className='blog-desc'>
            <p>{post.body}</p>
          </div>
          <div className='blog-read-more'>
            <button className='btn btn-outline-dark'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
