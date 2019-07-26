import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';

const StyledCode = styled.pre`
    box-shadow: 0 2px 5px 2px rgba(0,0,0,0.25);
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    max-width: 65%;
    margin-bottom: 10px;
    margin-top: 10px;  
    min-width: 325px; 
    font-size: 13px;
    transition: all 0.4s ease-in-out;
    & > code { 
      padding: 10px 50px 10px 15px;
      font-family: 'Fira Code', monospace !important;
    }
    @media(max-width: 375px){
      min-width: 300px;
    }
    @media(max-width: 500px){
      min-width: 320px;
    }
    &:hover{
      box-shadow: 0 2px 5px 5px rgba(0,0,0,0.30);
    }
`;


class CodeBlock extends React.PureComponent {
	constructor(props) {
		super(props);
		this.setRef = this.setRef.bind(this)
	}

	setRef(el) {
		this.codeEl = el
	}

	componentDidMount() {
		this.highlightCode()
	}

	componentDidUpdate() {
		this.highlightCode()
	}

	highlightCode() {
		hljs.highlightBlock(this.codeEl)
	}

	render() {
		return (
			<StyledCode>
				<code ref={this.setRef}
				      className={this.props.language === "no-highlight" ? "plaintext" : (this.props.language ? `language-${this.props.language}` : "plaintext")}>
					{this.props.value}
				</code>
			</StyledCode>
		)
	}
}

CodeBlock.defaultProps = {
	language: null
};

CodeBlock.propTypes = {
	value: PropTypes.string.isRequired,
	language: PropTypes.string
};

export default CodeBlock;
