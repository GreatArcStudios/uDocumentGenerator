import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
	& * {
		background: none !important;
		font-size: 22px;
		font-family: 'Fira Code', monospace !important;
		font-weight: 600;
		padding-left: 3px !important;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		margin: 0 !important;
		white-space: pre-wrap !important;
		word-break: break-all !important;
	}
	p{
		margin-bottom: 0.5rem !important
	}
	@media(max-width: 500px){
		& *{
			font-size: 17px
		}
	}
	@media(max-width: 800px){
		& *{
			font-size: 19px
		}
	}
`;

class HeaderInlineCode extends Component {
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

export default HeaderInlineCode;