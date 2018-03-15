import React, {Component} from 'react';
const API = 'https://jsonplaceholder.typicode.com/posts';

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({posts: data, isLoading: false}));
  }

  render() {
    const {posts} = this.state;

    return (

      <div className="row mt-3">
        {posts.map(post => 
        <div className="col-12 mb-4"  key={post.id}>
          <div className="card">
              <div className="card-header bg-info text-white">{post.title}</div>
              <div className="card-body">
                <h4 className="card-title">{post.email}</h4>
                <p className="card-text">
                  Access to precise, relevant, up-to-the minute data-driven content enables
                  businesses to be proactive in the face of dynamic world
                </p>
              </div>  
          </div>
        </div>
        )}
      </div>
    );
  }
}
export default Blogs;
