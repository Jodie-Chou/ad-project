import React, { Component } from 'react'
import './app.scss'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <div style={{ color: 'red' }}>
        React Apps
        <div className="box">
          <span>哈哈dev分支</span>
        </div>
      </div>
    );
  }
}
