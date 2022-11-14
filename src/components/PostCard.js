import React from 'react'

const PostCard = (props) => {
  
    const post = props;

  return (
    
    <div>
    <div className='container' >
      <div className='row main-row'>
        <div className='col-lg-4 col-md-10 col-sm-12'>
          <div className='blog-img'>
            <img src='logo512.png'  
            alt="nature"  className = "img-fluid"/>
          </div>
          <div className='row'>
            <div className='col-sm-10'>
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item'></li>
                <i class="fa-sharp fa-solid fa-heart fa-2x"></i>
                <li className='list-group-item'></li>
                <i class="fa-sharp fa-solid fa-thumbs-down fa-2x"></i>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div className='blog-title'>
            <h3>Title</h3>
          </div>
          <div className='blog-date'>
            <span>{post.userHandle} </span>
            <span>{post.createdAt}</span>
          </div>
          <div className='blog-desc'>
            <p>
            {post.body}
            </p>
          </div>
          <div className='blog-read-more'>
            <button className='btn btn-outline-dark'>Read More</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}


export default PostCard