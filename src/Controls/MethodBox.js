import React, {Component} from 'react';
import styled from 'styled-components';
import ReactMarkdown from "react-markdown/with-html";
import HeaderInlineCode from "../Markdown-Render/HeaderInlineCode";
import InlineCode from "../Markdown-Render/InlineCode";
import ParamListInlineCode from "../Markdown-Render/ParamListInlineCode";
import ProcessJSON from "../Processing/ProcessJSON";

const Container = styled.div`
    min-width: 325px;
    width: auto;
    max-width: inherit;
    height:auto;
    max-height: 450px;
    min-height: 150px;
    display: flex;
    flex-flow: column;
    color: #f8f8f3;
    background-color: #282a35; 
    margin-top: 15px;
    margin-bottom: 15px;
    -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 5px 2px rgba(0,0,0,0.25);
    transition: all 0.4s ease-in-out;
    &:hover{
        box-shadow: 0 2px 5px 5px rgba(0,0,0,0.30);
        //box-shadow: 1px 2px 5px 2px rgba(164,169,173,0.5);
    }
    @media(max-width: 500px){
      min-height: 200px;
      min-width: 250px;
    }
`;

const MethodHeader = styled.div`
  font-weight: bold;
  border-bottom: #2a2a2a;
  text-align: start;
  display: flex;
  & > h3 {
    margin-right: 10px;
    font-size: 1.5rem;
  }
  & > h2 {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const MethodDescription = styled.div`
  font-weight: lighter;
  padding: 10px;
  overflow-x: hidden;
  text-wrap: normal;
  a{
    color:white;
    text-decoration: underline;
    transition: all 0.4s ease-in-out;
  }
  a:hover{
    font-weight: bold;
  }
`;

const MethodParams = styled.div`
  display: flex;
  padding-left: 13px;
  & > b{
    margin-right: 2px;
    font-size: 17px;
    font-family: 'Fira Code', monospace !important;
  }
  @media(max-width: 500px){
    & > b{
        font-size: 15px
    }
  }
`;

// use this if you want to have a divider.
// it's best used as a divider between sections
const StyledDivider = styled.hr`
	width: 100%;
    border-top: 1px solid rgba(255,255,255,1);
    margin-top: 4px;
    margin-bottom: 12px;
    position: relative;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.35);
`;

class MethodBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			description: this.props.description,
			accessMod: this.props.accessMod,
			paramList: this.props.paramList
		};
		MethodBox.createParamString = MethodBox.createParamString.bind(this);
	}

	static createParamString(paramList) {
		let paramString = "";
		for (let param of paramList) {
			if (param.Item2) {
				paramString += param.Item1 + " = " + param.Item2 + " "
			} else {
				paramString += param.Item1 + " "
			}
		}
		return paramString.substr(0, paramString.length);
	}

	render() {
		let cleanDescription = "";
		if (this.state.description.includes("summary")) {
			cleanDescription = this.state.description.substring(0, this.state.description.indexOf("</summary>") + 11)
				.replace("<summary>", "").replace("</summary>", "");
		} else {
			cleanDescription = this.state.description
		}
		cleanDescription = ProcessJSON.cleanFormatDescription(cleanDescription);
		const paramString = MethodBox.createParamString(this.state.paramList).length > 0 ? "```" + MethodBox.createParamString(this.state.paramList) + "```" : "``` no parameters```";
		return (
			<Container>
				<MethodHeader>
					<ReactMarkdown source={"```" + this.state.accessMod + " " + this.state.name + "```"}
					               escapeHtml={false} renderers={{inlineCode: HeaderInlineCode}}/>
				</MethodHeader>
				<StyledDivider/>
				<MethodParams>
					<b>Parameters: </b>
					<ReactMarkdown source={paramString}
					               escapeHtml={false} renderers={{inlineCode: ParamListInlineCode}}/>
				</MethodParams>
				<MethodDescription>
					{/*Uncomment the 3 lines below if you get a white screen*/}
					{/*<p>*/}
					{/*    {this.state.description}*/}
					{/*</p>*/}
					<ReactMarkdown source={cleanDescription} escapeHtml={false} renderers={{inlineCode: InlineCode}}/>
				</MethodDescription>
			</Container>
		)
	}

}

export default MethodBox;
