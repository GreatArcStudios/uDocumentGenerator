import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: inline-flex;
	margin-right:2px;
	margin-left: 2px;
	& * {
		font-family: 'Fira Code', monospace !important;
		white-space: pre-wrap !important;
		margin-top: 0.2em !important;
		margin-bottom: 0.2em !important;
	}
	pre, code{
		padding: 0.5em !important; 
		border-radius: 0.3em;
	}
`;

class InlineCode extends Component {
	render() {
		return (
			<Container>
				<SyntaxHighlighter language="csharp" style={atomDark}>
					{this.props.value}
				</SyntaxHighlighter>
			</Container>
		);
	}
}

export default InlineCode;