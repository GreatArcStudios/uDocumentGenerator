import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
	& * {
		background: none !important;
		font-family: 'Fira Code', monospace !important;
		font-weight: 600;
		padding-left: 3px !important;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		margin: 0 !important;
		white-space: pre-wrap !important;
		word-break: break-all !important;
		font-size: 100% !important;
	}
	@media(max-width: 501px){
		& *{
			font-size: 12px !important;
		}
	}
`;

class ParamListInlineCode extends Component {
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

export default ParamListInlineCode;