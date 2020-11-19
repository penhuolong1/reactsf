import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        登录页
      </div>
    );
  }
}

export default withRouter(index);