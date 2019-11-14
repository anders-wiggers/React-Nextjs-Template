import React, { Component } from 'react';
import Layout from '../components/layout';

export default class index extends Component {
	render() {
		return (
			<Layout title="React Template">
				<div className="template">
					<h1>Next.js React Template</h1>
					<h5>
						created by <a href="https://github.com/anders-wiggers">@anders-wiggers</a> 👨‍💻
					</h5>
					<style jsx>{`
						.template {
							text-align: center;
							padding-top: calc(50vh - 24px);
						}
					`}</style>
				</div>
			</Layout>
		);
	}
}
