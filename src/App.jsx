import React, { Component } from "react"
import './app.scss'

export default class App extends Component {
	render() {
		return (
			<div style={{color: 'red'}}>
				React Apps
				<div className="box">
					<span>哈哈</span>
				</div>
			</div>
		)
	}
}