import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import Login from '@/views/loginHome'
import Layout from '@/views/layout'
import Ce1 from '@/views/ce/ce1.jsx'
import Ce2 from '@/views/ce/ce2.jsx'
import { getUserInfo } from '@/api/user.js'
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whiteRoutes: ['/login', '/ce1', '/ce2'],
      role: null
    }
  }
  componentDidMount() {
    getUserInfo().then(res => {
    })
  }
  render() {
    console.log(456)
    console.log(this.state.role)
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/ce1" component={Ce1} />
          <Route exact path="/ce2" component={Ce2} />
          <Route exact path="/home" component={Layout} />
          <Route path="/" render={props => {
            console.log(this.state)
            if (this.state.whiteRoutes.indexOf(props.location.pathname) != -1) {
              return <Redirect to={props.location.pathname}></Redirect>
            } else {
              if (this.state.role) {
                console.log(6666)
                return <Layout></Layout>
              } else {
                return <Redirect to='/login'></Redirect>
              }
            }
          }}></Route>
        </Switch>
      </Router>
    );
  }
  // 判断当前路由是否在白名单里
  isWhiteRoutes() {
    console.log(this.props)
  }
}

export default index;