import React from "react";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }
}



const PostIndexItem = ({ post }) => {
  return (
    <li className="post-index-item">
      <div className="post-header">
        <div className="post-header-image">
          <img src={} />
        </div>
      </div>
    </li>
  )
};

export default PostIndexItem;