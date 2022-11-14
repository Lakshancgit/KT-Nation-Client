import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import PostCard from '../components/PostCard';


class Home extends Component {
  state ={
    posts: null
  }

  
  componentDidMount(){
    console.log('res');
    axios.get('https://us-central1-kt-nation.cloudfunctions.net/api/posts').then(res => {
      console.log('res');
      this.setState({
        posts : res.data
      })
    }).catch(err => { console.log('eeeeeeee');});
  }

  render() {
    let recentPostsMarkup = this.state.posts ? (this.state.posts.map(post => <PostCard {...post} key={post.postId} />))
    : <p> Loading...</p>
    return (
      <div>
        <Container>
       <Row>
        <Col sm={8}>{recentPostsMarkup}</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
      </div>
    )
  }
}

export default Home