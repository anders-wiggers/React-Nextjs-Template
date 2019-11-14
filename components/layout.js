import Head from 'next/head';
import React, { Component } from 'react';

export default class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="body">
				<Head>
					<title>{this.props.title}</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
						integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
						crossorigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
				</Head>
				<div className="container">{this.props.children}</div>
				<style jsx global>{`
					body {
						color: #e6d6b8;
						background-color: #2f4858;
						font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir,
							"Helvetica Neue", "Lucida Grande", sans-serif;
						height: 100vh;
						text-align: left;
						-webkit-font-smoothing: antialiased;
					}
					a {
						color: #dea02c;
					}
					a:hover {
						color: #a77518;
						text-decoration: none;
					}
				`}</style>
			</div>
		);
	}
}
