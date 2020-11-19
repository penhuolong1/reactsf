import React from 'react'
import { ConfigProvider } from "antd"
import Routers from '@/router/index'


class App extends React.Component{
  render() {
    return (
      <div>
        <Routers></Routers>
      </div>
    )
  }
}

export default App;
