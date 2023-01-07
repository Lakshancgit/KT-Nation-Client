import React from "react";
import dayjs from "dayjs";
import { Modal } from "react-bootstrap";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

const PostCard = (props) => {
  const [LgShow, setLgShow] = useState(false);
  const post = props;
  console.log(post.imageUrl);
  dayjs.extend(relativeTime);
  return (
    <>
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
                <ul>
                  <li className='list-group-item'>
                    <i
                      className='fa-solid fa-heart fa-2x'
                      style={{ paddingRight: 5 + "%" }}
                    ></i>
                    <i className=' fa-solid fa-thumbs-down fa-2x'></i>
                  </li>
                  {`${post.likeCount} Likes & ${post.commentCount} Comments`}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-sm-12'>
            <div className='blog-title' style={{ paddingTop: 5 + "%" }}>
              <h3>{post.title}</h3>
            </div>
            <div className='blog-date' style={{ paddingBottom: 5 + "%" }}>
              <span>{post.userHandle} </span>
              <span>{dayjs(post.createdAt).fromNow()}</span>
            </div>
            <div className='blog-desc'>
              <p>{post.body}</p>
            </div>
            <div className='blog-read-more'>
              <button
                className='btn btn-outline-dark'
                onClick={() => setLgShow(true)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size='lg'
        show={LgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            <span>{post.userHandle} </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{post.body}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostCard;
