import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props) {
	super(props);
	this.state = {
		hasError: false
		}
	}

componentDitCatch(error, info) {
this.setState({hasError: true})
}

render() {
	if (this.state.hasError) {
		return <h1>Ooops. That doesn't look good</h1>
		}
		return this.props.children
		}
	}

export default ErrorBoundry;